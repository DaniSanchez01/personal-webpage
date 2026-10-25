import sierraEspuna from '../../../assets/images/personalGallery/sierraEspuna.jpg';
import kayak from '../../../assets/images/personalGallery/kayak.jpg';
import { BlogPost } from './blog.types';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'what-my-first-year-at-fever-taught-me',
    title: 'What my first year at Fever taught me',
    excerpt:
      'Shipping to real users changes how you think about code. Some notes on mistakes, mentors and small wins.',
    publishedAt: '2026-10-02',
    readTimeMinutes: 6,
    categories: ['story', 'tech'],
    cover: { src: kayak, alt: 'Placeholder cover' },
    content: [
      {
        type: 'paragraph',
        text: 'The first thing nobody tells you about a real production system is that most of your work is reading. Reading code, reading logs, reading the intentions of people who left the team two years ago.',
      },
      { type: 'heading', text: 'What surprised me' },
      {
        type: 'paragraph',
        text: 'Small details matter more than big ideas. A well named function saves an hour; a missing test costs a weekend.',
      },
      { type: 'heading', text: 'A small example' },
      {
        type: 'code',
        language: 'python',
        code: 'def total(items):\n    return sum(i.price * i.qty for i in items)',
      },
      {
        type: 'list',
        items: [
          'Name things for the reader, not the compiler.',
          'Prefer boring solutions that you can explain in one sentence.',
          'Write the test you wish you had last time.',
        ],
      },
      { type: 'heading', text: 'Closing thoughts' },
      {
        type: 'paragraph',
        text: 'That is it for now. If something here resonates, or you disagree, I would love to hear from you.',
      },
    ],
  },
  {
    slug: 'why-i-still-write-boring-code-on-purpose',
    title: 'Why I still write boring code on purpose',
    excerpt:
      'Clever is expensive. A short defense of plain, readable software and the habits that keep it that way.',
    publishedAt: '2026-09-18',
    readTimeMinutes: 5,
    categories: ['tech'],
    content: [
      { type: 'paragraph', text: 'Placeholder content for the detail view.' },
    ],
  },
  {
    slug: 'building-this-website-from-scratch',
    title: 'Building this website from scratch',
    excerpt:
      'The stack, the dead ends and the design decisions behind the page you are reading right now.',
    publishedAt: '2026-08-30',
    readTimeMinutes: 8,
    categories: ['project', 'tech'],
    content: [
      { type: 'paragraph', text: 'Placeholder content for the detail view.' },
    ],
  },
  {
    slug: 'hexagonal-architecture-without-the-buzzwords',
    title: 'Hexagonal architecture without the buzzwords',
    excerpt:
      'What actually changed in my day-to-day when I stopped letting the framework own the domain.',
    publishedAt: '2026-08-11',
    readTimeMinutes: 7,
    categories: ['tech', 'project'],
    content: [
      { type: 'paragraph', text: 'Placeholder content for the detail view.' },
    ],
  },
  {
    slug: 'a-week-offline-in-the-mountains',
    title: 'A week offline in the mountains',
    excerpt:
      "No laptop, no notifications. What I missed, what I didn't, and what I brought back.",
    publishedAt: '2026-07-24',
    readTimeMinutes: 4,
    categories: ['story'],
    cover: { src: sierraEspuna, alt: 'Placeholder cover' },
    content: [
      { type: 'paragraph', text: 'Placeholder content for the detail view.' },
    ],
  },
  {
    slug: 'classifying-instagram-photographers-with-ml',
    title: 'Classifying Instagram photographers with ML',
    excerpt:
      'A look back at my thesis project: the data, the models and what I would do differently today.',
    publishedAt: '2026-07-05',
    readTimeMinutes: 9,
    categories: ['project', 'tech'],
    content: [
      { type: 'paragraph', text: 'Placeholder content for the detail view.' },
    ],
  },
  {
    slug: 'notes-on-learning-react-as-a-backend-dev',
    title: 'Notes on learning React as a backend dev',
    excerpt:
      'What felt familiar, what felt alien, and the mental models that finally made it click.',
    publishedAt: '2026-06-14',
    readTimeMinutes: 6,
    categories: ['tech', 'story'],
    content: [
      { type: 'paragraph', text: 'Placeholder content for the detail view.' },
    ],
  },
];
