export const generatePersonSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ganesh Shah',
    url: 'https://ganeshsahu.com.np',
    sameAs: [
      'https://github.com/ganeshshah2064',
      'https://www.linkedin.com/in/ganesh-shah2064',
      'https://www.instagram.com/ganesh_sha1',
      'https://facebook.com/ganesh.ffx1'
    ],
    jobTitle: 'Software Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance'
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Sushma Godawari College'
    },
    homeLocation: {
      '@type': 'Place',
      name: 'Ithari, Nepal'
    },
    description: 'Passionate developer from Ithari, Nepal with experience in building web applications.'
  };
};

export const generateWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ganesh Shah Portfolio',
    url: 'https://ganeshsahu.com.np',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ganeshsahu.com.np/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };
};
