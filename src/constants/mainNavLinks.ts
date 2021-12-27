export const mainNavLinks = [
  { title: 'home', link: '/', children: [] },
  {
    title: 'projects',
    link: '/projects',
    children: [
      { id: 1, title: 'personal portfolio' },
      { id: 2, title: 'car rent' },
      { id: 3, title: 'booking system' },
      { id: 4, title: 'library' },
      { id: 5, title: 'kids teaching skills platform' },
    ],
  },
  {
    title: 'about',
    link: '/about',
    children: [
      { id: 0, title: 'experience' },
      { id: 0, title: 'education' },
    ],
  },
  { title: 'blogs', link: '/blogs', children: [] },
  {
    title: 'services',
    link: '/services',
  },
  {
    title: 'certifications',
    link: '/certifications',
  },
  { title: 'contact', link: '/contact', children: [] },
];
