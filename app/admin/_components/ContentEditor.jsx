'use client';
import { useEffect, useState, useTransition } from 'react';
import { CONTENT_SECTIONS, findSection, emptyItem } from '../../../lib/contentSchema';
import { saveContentSection, resetContentSection } from '../actions';
import styles from './Admin.module.css';

const LOCALES = ['tr', 'en'];

const getIn = (value, path) => path.reduce((current, key) => current?.[key], value);

function setIn(value, path, next) {
  if (!path.length) return next;
  const [key, ...rest] = path;
  const copy = Array.isArray(value) ? [...value] : { ...value };
  copy[key] = setIn(value?.[key], rest, next);
  return copy;
}

// Pads lists so TR and EN rows line up one to one.
function align(fields, tr, en) {
  const nextTr = { ...tr };
  const nextEn = { ...en };
  for (const field of fields) {
    if (field.type !== 'list' && field.type !== 'group') continue;
    const blank = () => (field.type === 'list' ? '' : emptyItem(field.fields));
    const length = Math.max(tr[field.key].length, en[field.key].length);
    nextTr[field.key] = Array.from({ length }, (_, i) => tr[field.key][i] ?? blank());
    nextEn[field.key] = Array.from({ length }, (_, i) => en[field.key][i] ?? blank());
    if (field.type === 'group') {
      for (let i = 0; i < length; i++) {
        [nextTr[field.key][i], nextEn[field.key][i]] = align(field.fields, nextTr[field.key][i], nextEn[field.key][i]);
      }
    }
  }
  return [nextTr, nextEn];
}

// Drops list rows that are empty in both languages.
function prune(fields, tr, en) {
  const nextTr = { ...tr };
  const nextEn = { ...en };
  for (const field of fields) {
    if (field.type === 'list') {
      const keep = tr[field.key].map((value, i) => Boolean(value.trim() || en[field.key][i].trim()));
      nextTr[field.key] = tr[field.key].filter((_, i) => keep[i]);
      nextEn[field.key] = en[field.key].filter((_, i) => keep[i]);
    } else if (field.type === 'group') {
      const pairs = tr[field.key].map((item, i) => prune(field.fields, item, en[field.key][i]));
      nextTr[field.key] = pairs.map(([itemTr]) => itemTr);
      nextEn[field.key] = pairs.map(([, itemEn]) => itemEn);
    }
  }
  return [nextTr, nextEn];
}

function prepare(sections) {
  return Object.fromEntries(CONTENT_SECTIONS.map(section => {
    const [tr, en] = align(section.fields, sections[section.key].tr, sections[section.key].en);
    return [section.key, { tr, en }];
  }));
}

export default function ContentEditor({ initial, defaults }) {
  const [saved, setSaved] = useState(() => prepare(initial));
  const [drafts, setDrafts] = useState(() => prepare(initial));
  const [activeKey, setActiveKey] = useState(CONTENT_SECTIONS[0].key);
  const [status, setStatus] = useState(null);
  const [confirmingReset, setConfirmingReset] = useState(false);
  const [pending, startTransition] = useTransition();

  const section = findSection(activeKey);
  const draft = drafts[activeKey];
  const isDirty = key => JSON.stringify(drafts[key]) !== JSON.stringify(saved[key]);
  const anyDirty = CONTENT_SECTIONS.some(({ key }) => isDirty(key));

  useEffect(() => {
    if (!anyDirty) return;
    const warn = event => event.preventDefault();
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [anyDirty]);

  function update(change) {
    setDrafts(prev => ({ ...prev, [activeKey]: change(prev[activeKey]) }));
    setStatus(null);
  }

  // List operations apply to both languages so rows stay paired.
  function changeList(path, change) {
    update(current => ({
      tr: setIn(current.tr, path, change(getIn(current.tr, path))),
      en: setIn(current.en, path, change(getIn(current.en, path))),
    }));
  }

  const ops = {
    setValue: (locale, path, value) => update(current => ({ ...current, [locale]: setIn(current[locale], path, value) })),
    setShared: (path, value) => update(current => ({ tr: setIn(current.tr, path, value), en: setIn(current.en, path, value) })),
    addItem: (path, item) => changeList(path, list => [...list, structuredClone(item)]),
    removeItem: (path, index) => changeList(path, list => list.filter((_, i) => i !== index)),
    moveItem: (path, index, offset) => changeList(path, list => {
      const copy = [...list];
      const [item] = copy.splice(index, 1);
      copy.splice(index + offset, 0, item);
      return copy;
    }),
  };

  function selectSection(key) {
    setActiveKey(key);
    setStatus(null);
    setConfirmingReset(false);
  }

  function replaceSection(key, value) {
    setSaved(prev => ({ ...prev, [key]: value }));
    setDrafts(prev => ({ ...prev, [key]: value }));
  }

  function save() {
    const key = activeKey;
    const [tr, en] = prune(section.fields, draft.tr, draft.en);
    startTransition(async () => {
      const result = await saveContentSection(key, { tr, en });
      if (result.error) return setStatus({ error: true, text: result.error });
      replaceSection(key, { tr, en });
      setStatus({ text: 'Kaydedildi, sitede yayında.' });
    });
  }

  function reset() {
    const key = activeKey;
    setConfirmingReset(false);
    startTransition(async () => {
      const result = await resetContentSection(key);
      if (result.error) return setStatus({ error: true, text: result.error });
      const [tr, en] = align(section.fields, defaults[key].tr, defaults[key].en);
      replaceSection(key, { tr, en });
      setStatus({ text: 'Bölüm koddaki varsayılan metne döndü.' });
    });
  }

  const dirty = isDirty(activeKey);

  return (
    <div className={styles.editor}>
      <aside className={styles.sectionList} aria-label="Bölümler">
        {CONTENT_SECTIONS.map(({ key, label }) => (
          <button key={key} type="button" className={key === activeKey ? styles.sectionActive : undefined} onClick={() => selectSection(key)}>
            {label}
            {isDirty(key) && <span className={styles.dot} title="Kaydedilmemiş değişiklik" />}
          </button>
        ))}
      </aside>

      <div className={styles.editorBody}>
        <h1 className={styles.pageTitle}>{section.label}</h1>
        <p className={styles.muted}>Soldaki kutular Türkçe, sağdakiler İngilizce. Tek kutulu alanlar iki dilde de aynı.</p>

        <div className={styles.fields}>
          <Fields fields={section.fields} path={[]} draft={draft} ops={ops} />
        </div>

        <div className={styles.saveBar}>
          <div className={styles.saveButtons}>
            <button type="button" className="btn btn-primary" disabled={!dirty || pending} onClick={save}>
              {pending ? 'Kaydediliyor…' : 'Kaydet ve yayınla'}
            </button>
            <button type="button" className="btn btn-ghost" disabled={!dirty || pending} onClick={() => replaceSection(activeKey, saved[activeKey])}>
              Değişiklikleri geri al
            </button>
          </div>
          <div className={styles.saveButtons}>
            {status && <p className={status.error ? styles.error : styles.success} role="status">{status.text}</p>}
            {confirmingReset ? (
              <>
                <button type="button" className={`${styles.smallButton} ${styles.danger}`} disabled={pending} onClick={reset}>Evet, varsayılana dön</button>
                <button type="button" className={styles.smallButton} onClick={() => setConfirmingReset(false)}>Vazgeç</button>
              </>
            ) : (
              <button type="button" className={styles.smallButton} disabled={pending} onClick={() => setConfirmingReset(true)}>Varsayılana dön</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Fields({ fields, path, draft, ops }) {
  return fields.map(field => {
    const props = { field, path: [...path, field.key], draft, ops };
    if (field.type === 'group') return <GroupField key={field.key} {...props} />;
    if (field.type === 'list') return <ListField key={field.key} {...props} />;
    return <TextField key={field.key} {...props} />;
  });
}

function TextInput({ multiline, ...props }) {
  return multiline
    ? <textarea className={styles.input} rows={3} {...props} />
    : <input className={styles.input} {...props} />;
}

function LocalizedInputs({ label, path, draft, ops, multiline, shared }) {
  if (shared) {
    return <TextInput multiline={multiline} aria-label={label} value={getIn(draft.tr, path)} onChange={event => ops.setShared(path, event.target.value)} />;
  }
  return (
    <div className={styles.pair}>
      {LOCALES.map(locale => (
        <label key={locale} className={styles.localized}>
          <span>{locale.toUpperCase()}</span>
          <TextInput multiline={multiline} aria-label={`${label} (${locale.toUpperCase()})`} value={getIn(draft[locale], path)} onChange={event => ops.setValue(locale, path, event.target.value)} />
        </label>
      ))}
    </div>
  );
}

function TextField({ field, path, draft, ops }) {
  return (
    <div className={styles.fieldBlock}>
      <span className={styles.fieldLabel}>{field.label}</span>
      <LocalizedInputs label={field.label} path={path} draft={draft} ops={ops} multiline={field.type === 'textarea'} shared={field.shared} />
    </div>
  );
}

function RowButtons({ path, index, count, ops }) {
  return (
    <div className={styles.rowActions}>
      <button type="button" className={styles.iconButton} disabled={index === 0} onClick={() => ops.moveItem(path, index, -1)} aria-label="Yukarı taşı">↑</button>
      <button type="button" className={styles.iconButton} disabled={index === count - 1} onClick={() => ops.moveItem(path, index, 1)} aria-label="Aşağı taşı">↓</button>
      <button type="button" className={styles.iconButton} onClick={() => ops.removeItem(path, index)} aria-label="Kaldır">✕</button>
    </div>
  );
}

function ListField({ field, path, draft, ops }) {
  const rows = getIn(draft.tr, path);
  return (
    <div className={styles.fieldBlock}>
      <span className={styles.fieldLabel}>{field.label}</span>
      {rows.map((_, index) => (
        <div key={index} className={styles.listRow}>
          <LocalizedInputs label={`${field.label} ${index + 1}`} path={[...path, index]} draft={draft} ops={ops} multiline={field.multiline} />
          <RowButtons path={path} index={index} count={rows.length} ops={ops} />
        </div>
      ))}
      <button type="button" className={styles.addButton} onClick={() => ops.addItem(path, '')}>+ Satır ekle</button>
    </div>
  );
}

function GroupField({ field, path, draft, ops }) {
  const items = getIn(draft.tr, path);
  return (
    <div className={styles.fieldBlock}>
      <span className={styles.fieldLabel}>{field.label}</span>
      {items.map((item, index) => (
        <GroupItem
          key={index}
          title={item[field.summary] || `${field.itemLabel} ${index + 1}`}
          initiallyOpen={!item[field.summary]}
          actions={<RowButtons path={path} index={index} count={items.length} ops={ops} />}
        >
          <Fields fields={field.fields} path={[...path, index]} draft={draft} ops={ops} />
        </GroupItem>
      ))}
      <button type="button" className={styles.addButton} onClick={() => ops.addItem(path, emptyItem(field.fields))}>+ {field.itemLabel} ekle</button>
    </div>
  );
}

function GroupItem({ title, initiallyOpen, actions, children }) {
  const [open, setOpen] = useState(initiallyOpen);
  return (
    <div className={styles.groupItem}>
      <div className={styles.groupHead}>
        <button type="button" className={styles.groupToggle} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span aria-hidden="true">{open ? '▾' : '▸'}</span> {title}
        </button>
        {actions}
      </div>
      {open && <div className={styles.groupBody}>{children}</div>}
    </div>
  );
}
