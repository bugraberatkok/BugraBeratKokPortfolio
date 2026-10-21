// Editable site text, as shown in the admin panel.
// Field types: text, textarea, list (strings), group (list of objects).
// `shared` fields have one value for both languages (names, links).
// `summary` names the field shown as a group item's title in the editor.
// `multiline` lists use textareas for each row.

export const CONTENT_SECTIONS = [
  {
    key: 'hero',
    label: 'Profil kartı',
    fields: [
      { key: 'name', label: 'Ad soyad', type: 'text', shared: true },
      { key: 'title', label: 'Ünvan', type: 'text' },
      { key: 'tagline', label: 'Kısa tanıtım', type: 'textarea' },
      { key: 'currentCompany', label: 'Şu anki şirket', type: 'text', shared: true },
      { key: 'currentRole', label: 'Şu anki pozisyon', type: 'text' },
      { key: 'photoAlt', label: 'Fotoğraf alt metni', type: 'text' },
    ],
  },
  {
    key: 'about',
    label: 'Hakkımda',
    fields: [
      { key: 'title', label: 'Bölüm başlığı', type: 'text' },
      { key: 'p1', label: '1. paragraf', type: 'textarea' },
      { key: 'p2', label: '2. paragraf', type: 'textarea' },
      { key: 'skillsTitle', label: 'Araçlar başlığı', type: 'text' },
      {
        key: 'skillGroups', label: 'Araç grupları', type: 'group', itemLabel: 'Grup', summary: 'title',
        fields: [
          { key: 'title', label: 'Grup adı', type: 'text' },
          { key: 'items', label: 'Araçlar', type: 'list' },
        ],
      },
    ],
  },
  {
    key: 'experience',
    label: 'Deneyim',
    fields: [
      { key: 'title', label: 'Bölüm başlığı', type: 'text' },
      { key: 'current', label: '"Güncel görev" etiketi (ilk işte görünür)', type: 'text' },
      {
        key: 'jobs', label: 'İşler', type: 'group', itemLabel: 'İş', summary: 'company',
        fields: [
          { key: 'company', label: 'Şirket', type: 'text', shared: true },
          { key: 'title', label: 'Pozisyon', type: 'text' },
          { key: 'date', label: 'Tarih', type: 'text' },
          { key: 'description', label: 'Açıklama maddeleri', type: 'list', multiline: true },
        ],
      },
    ],
  },
  {
    key: 'projects',
    label: 'Projeler',
    fields: [
      { key: 'title', label: 'Bölüm başlığı', type: 'text' },
      {
        key: 'items', label: 'Projeler', type: 'group', itemLabel: 'Proje', summary: 'title',
        fields: [
          { key: 'category', label: 'Kategori', type: 'text' },
          { key: 'title', label: 'Proje adı', type: 'text' },
          { key: 'description', label: 'Açıklama', type: 'textarea' },
          { key: 'tags', label: 'Etiketler', type: 'list' },
          { key: 'github', label: 'GitHub linki', type: 'text', shared: true },
        ],
      },
    ],
  },
  {
    key: 'education',
    label: 'Eğitim ve Diller',
    fields: [
      { key: 'title', label: 'Bölüm başlığı', type: 'text' },
      {
        key: 'items', label: 'Okullar', type: 'group', itemLabel: 'Okul', summary: 'degree',
        fields: [
          { key: 'institution', label: 'Kurum', type: 'text' },
          { key: 'degree', label: 'Bölüm / program', type: 'text' },
          { key: 'date', label: 'Tarih', type: 'text' },
        ],
      },
      { key: 'languagesTitle', label: 'Diller başlığı', type: 'text' },
      { key: 'languages', label: 'Diller', type: 'list' },
    ],
  },
  {
    key: 'certificates',
    label: 'Sertifikalar bölümü',
    fields: [
      { key: 'title', label: 'Bölüm başlığı', type: 'text' },
      { key: 'view', label: '"Sertifikayı gör" bağlantısı', type: 'text' },
      { key: 'verify', label: '"Doğrula" bağlantısı', type: 'text' },
    ],
  },
  {
    key: 'contact',
    label: 'İletişim',
    fields: [
      { key: 'title', label: 'Başlık', type: 'text' },
      { key: 'emailAction', label: 'E-posta bağlantısı', type: 'text' },
    ],
  },
  {
    key: 'nav',
    label: 'Menü',
    fields: [
      { key: 'about', label: 'Hakkımda', type: 'text' },
      { key: 'experience', label: 'Deneyim', type: 'text' },
      { key: 'projects', label: 'Projeler', type: 'text' },
      { key: 'education', label: 'Eğitim', type: 'text' },
      { key: 'contact', label: 'İletişim', type: 'text' },
      { key: 'menu', label: 'Mobil menü butonu', type: 'text' },
      { key: 'close', label: 'Mobil menü kapat', type: 'text' },
    ],
  },
];

export function findSection(key) {
  return CONTENT_SECTIONS.find((section) => section.key === key);
}

export function emptyItem(fields) {
  return Object.fromEntries(fields.map((field) => [
    field.key,
    field.type === 'list' || field.type === 'group' ? [] : '',
  ]));
}

const MAX_TEXT_LENGTH = 5000;
const asText = (value) => (typeof value === 'string' ? value : '').slice(0, MAX_TEXT_LENGTH);

// Keeps only the schema's fields, coerced to the expected shape.
export function sanitizeSection(fields, value) {
  const source = value && typeof value === 'object' ? value : {};
  return Object.fromEntries(fields.map((field) => {
    const raw = source[field.key];
    if (field.type === 'group') {
      return [field.key, Array.isArray(raw) ? raw.map((item) => sanitizeSection(field.fields, item)) : []];
    }
    if (field.type === 'list') {
      return [field.key, Array.isArray(raw) ? raw.map(asText) : []];
    }
    return [field.key, asText(raw)];
  }));
}

const isPlainObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);

// Objects merge key by key; arrays and strings replace the base value.
export function mergeContent(base, override) {
  if (override === undefined) return base;
  if (!isPlainObject(base) || !isPlainObject(override)) return override;
  const merged = { ...base };
  for (const [key, value] of Object.entries(override)) {
    merged[key] = mergeContent(base[key], value);
  }
  return merged;
}
