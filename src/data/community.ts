import { CommunityTrack, RecapItem } from '@/types';

export const marqueeChips = [
  'Android Development',
  'Cloud Run & Kubernetes',
  'Gemini & Vertex AI',
  'Web Vitals & Performance',
  'Open Source Sprints',
  'System Design Labs',
  'Firebase & Modern Storage',
  'Flutter & Mobile Systems',
];

export const communityTracks: CommunityTrack[] = [
  {
    id: 'track-ai',
    title: 'Cloud & AI',
    subtitle: 'Multimodal models, vector indexes, and scalable serverless compute.',
    tagColor: 'blue'
  },
  {
    id: 'track-android',
    title: 'Android & Mobile',
    subtitle: 'Modern Jetpack Compose, Kotlin coroutines, and app architecture.',
    tagColor: 'green'
  },
  {
    id: 'track-web',
    title: 'Web & Chrome',
    subtitle: 'Core Web Vitals, modern CSS, WebAssembly, and browser runtimes.',
    tagColor: 'yellow'
  },
  {
    id: 'track-oss',
    title: 'Open Source',
    subtitle: 'Git deep-dives, developer tooling, and peer review culture.',
    tagColor: 'red'
  }
];

export const latestRecap: RecapItem = {
  id: 'recap-open-source',
  title: 'Open Source Engine Recap',
  date: 'November 2026',
  summary: 'Students dissected the internal Git object tree, resolved tricky three-way merge conflicts, and shipped contributions to open documentation.',
  highlights: [
    'Deep dive into Git plumbing commands (cat-file, hash-object)',
    'Practical interactive rebase & conflict resolution workshop',
    'Peer code review and pull request etiquette'
  ],
  tag: 'Recent Event Recap',
  tagColor: 'red'
};

export const threeSteps = [
  {
    step: '01',
    title: 'Learn Together',
    pill: 'Workshops',
    description: 'Hands-on technical sessions where we study real code, architecture choices, and developer tools together.',
    tagColor: 'blue' as const,
  },
  {
    step: '02',
    title: 'Build in Public',
    pill: 'Hack Days',
    description: 'Turn ideas into working repositories, test edge cases, and solve real campus and developer problems.',
    tagColor: 'yellow' as const,
  },
  {
    step: '03',
    title: 'Ship to Impact',
    pill: 'Open Source',
    description: 'Contribute to open tools, collaborate with peers, and share finished projects with the broader community.',
    tagColor: 'green' as const,
  }
];

export const communityLinks = [
  {
    name: 'GitHub Organization',
    description: 'Explore community repositories, workshop codebases, and project templates.',
    href: '#',
    badge: 'Code'
  },
  {
    name: 'Developer Vertical Channel',
    description: 'Collaborate on active projects, discuss architecture, and review PRs.',
    href: '#',
    badge: 'Discuss'
  },
  {
    name: 'GDG Events Portal',
    description: 'Official chapter events portal on Google Developer Community.',
    href: '#',
    badge: 'Register'
  }
];
