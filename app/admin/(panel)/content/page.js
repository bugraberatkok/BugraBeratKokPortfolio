import { getSiteContent, defaultContent } from '../../../../lib/content';
import { CONTENT_SECTIONS, sanitizeSection } from '../../../../lib/contentSchema';
import ContentEditor from '../../_components/ContentEditor';

function pickSections(content) {
  return Object.fromEntries(CONTENT_SECTIONS.map(section => [section.key, {
    tr: sanitizeSection(section.fields, content.tr[section.key]),
    en: sanitizeSection(section.fields, content.en[section.key]),
  }]));
}

export default async function ContentPage() {
  const content = await getSiteContent();
  return <ContentEditor initial={pickSections(content)} defaults={pickSections(defaultContent)} />;
}
