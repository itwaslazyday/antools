import {PopularTool} from './types/types';
const headerLinks: string[] = ['Home', 'Categories', 'My Collections', 'Blog'];
const footerLinks: string[] = ['Design', 'Development', 'About Us', 'Our Partners', 'Blog'];

const feedbackList = [
  {
    person: 'Ronald Richards',
    job: 'Product Manager',
    quote: 'Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.',
    image: 'person-1'
  },
  {
    person: 'Tom Hardley',
    job: 'HR Assistant',
    quote: 'Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.',
    image: 'person-1'
  },
  {
    person: 'Steven McGlory',
    job: 'Frontend Developer',
    quote: 'Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.',
    image: 'person-1'
  },
];

const popularToolsList: PopularTool[] = [
  {
    title: 'FIGMA',
    license: 'Free',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isFavourite: false,
    isAdded: false,
    url: 'https://www.figma.com',
  },
  {
    title: 'Sketch',
    license: 'Trial & Paid',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isFavourite: false,
    isAdded: false,
    url: 'https://www.sketch.com'
  },
  {
    title: 'Visual Studio Code',
    license: 'Free',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isFavourite: false,
    isAdded: false,
    url: 'https://code.visualstudio.com',
    icon: 'vsc'
  },
  {
    title: 'Notion',
    license: 'Free & Paid',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isFavourite: false,
    isAdded: false,
    url: 'https://www.notion.so/about'
  },
  {
    title: 'Slack',
    license: 'Free & Paid',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isFavourite: false,
    isAdded: false,
    url: 'https://slackcommunity.com'
  },
  {
    title: 'Invision',
    license: 'Free & Paid',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isFavourite: false,
    isAdded: false,
    url: 'https://www.invisionapp.com'
  }
];

export {headerLinks, footerLinks, feedbackList, popularToolsList};
