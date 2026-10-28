// Page sections in order, shared by the hero index and the compact top menu.
// Certificates only appear once at least one has been added in the panel.
export function getSections(t, hasCertificates) {
  return [
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'education', label: t.nav.education },
    ...(hasCertificates ? [{ id: 'certificates', label: t.certificates.title }] : []),
    { id: 'contact', label: t.nav.contact },
  ];
}
