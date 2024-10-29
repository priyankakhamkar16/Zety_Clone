// src/templates.js
export const templates = [
    {
      id: 1,
      name: 'Basic Template',
      image: 'path/to/basic-template.png',
      fields: [
        { label: 'Name', type: 'text', stateKey: 'name' },
        { label: 'Email', type: 'email', stateKey: 'email' },
      ],
    },
    {
      id: 2,
      name: 'Canva Customer Service Resume',
      image: 'path/to/canva-template.png',
      link: 'https://www.canva.com/templates/EAFMoRIsgAQ-minimal-customer-service-resume/',
    },
    {
      id: 3,
      name: 'Professional Template',
      image: 'path/to/professional-template.png',
      fields: [
        { label: 'Professional Title', type: 'text', stateKey: 'title' },
        { label: 'LinkedIn Profile', type: 'url', stateKey: 'linkedin' },
        { label: 'Portfolio URL', type: 'url', stateKey: 'portfolio' },
      ],
    },
  ];
  