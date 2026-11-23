import { EventItem } from '@/types';

export const mockEvents: EventItem[] = [
  {
    id: 'event-1',
    slug: 'cloud-ai-summit-2026',
    title: 'Cloud & AI Developer Summit 2026',
    tagline: 'Deep dive into multimodal pipelines and Vertex AI workflows.',
    description: 'A hands-on technical workshop exploring Gemini 1.5/2.0 API integrations, vector embeddings, and real-time cloud deployments.',
    fullDescription: [
      'Join GDG on Campus RVCE for a technical deep dive into generative architectures and scalable cloud orchestration.',
      'Through guided live-coding sessions, participants build a functional multimodal agent from scratch, deploying it to production with secure secret management, structured outputs, and observable telemetry.',
      'All attendees should bring their laptops with Node.js 20+ or Python 3.11+ installed. Cloud sandbox environments and API credits are provided during the session.'
    ],
    category: 'Cloud & AI',
    tagColor: 'blue',
    date: 'Sat, Dec 12',
    isoDate: '2026-12-12',
    time: '10:00 AM – 3:30 PM IST',
    venue: 'Civil Seminar Hall, Ground Floor, RVCE Campus',
    isVirtual: false,
    status: 'upcoming',
    featured: true,
    registrationUrl: '#',
    agenda: [
      { time: '10:00 AM – 10:30 AM', topic: 'Keynote: Multimodal Systems & Frontier Tool Calling', speaker: 'Faculty & Lead Mentors' },
      { time: '10:30 AM – 12:00 PM', topic: 'Workshop: Streaming Workflows & Structured JSON Extraction', speaker: 'Dev Vertical Team' },
      { time: '12:00 PM – 1:00 PM', topic: 'Lunch & Open Peer Hacking', speaker: 'Community' },
      { time: '1:00 PM – 2:45 PM', topic: 'Sprint: Deploying Micro-agents with Cloud Run', speaker: 'Cloud Track Leads' },
      { time: '2:45 PM – 3:30 PM', topic: 'Showcase & Code Reviews', speaker: 'All Participants' }
    ],
    prerequisites: [
      'Basic familiarity with TypeScript or Python',
      'Laptop with Node 20+ / Python 3.11+ and Git',
      'Active GitHub account'
    ]
  },
  {
    id: 'event-2',
    slug: 'android-build-day',
    title: 'Modern Android with Jetpack Compose',
    tagline: 'Modern UI architecture, state hoisting, and Material 3 design systems.',
    description: 'Explore reactive Android engineering from initial view composition to modular navigation and performance profiling.',
    fullDescription: [
      'Compose has fundamentally changed how Android engineers approach view architecture and state lifecycle.',
      'In this session, we dissect Jetpack Compose internals, build custom animation modifiers, and wire offline-first databases with Room and Kotlin Flow.'
    ],
    category: 'Android',
    tagColor: 'green',
    date: 'Sat, Dec 19',
    isoDate: '2026-12-19',
    time: '2:00 PM – 5:30 PM IST',
    venue: 'CSE Department Lab 3, RVCE Campus',
    isVirtual: false,
    status: 'upcoming',
    featured: false,
    registrationUrl: '#',
    agenda: [
      { time: '2:00 PM – 3:00 PM', topic: 'Recomposition Mechanics & Performance Optimization' },
      { time: '3:00 PM – 4:30 PM', topic: 'Live Build: Offline-first Architecture with Kotlin Flow' },
      { time: '4:30 PM – 5:30 PM', topic: 'Lightning Demos & Q&A' }
    ],
    prerequisites: [
      'Android Studio Ladybug or later installed',
      'Basic Kotlin syntax familiarity'
    ]
  },
  {
    id: 'event-3',
    slug: 'web-performance-lab',
    title: 'The Art of Web Performance & Core Web Vitals',
    tagline: 'Achieving sub-second interaction to next paint (INP) and pristine layouts.',
    description: 'An interactive lab analyzing the browser render waterfall, resource hints, memory diagnostics, and bundle tree-shaking.',
    fullDescription: [
      'Fast websites are not made by accident; they are engineered with deliberate measurement and architectural restraint.',
      'We dive deep into Chrome DevTools performance traces, paint worklets, server component boundaries, and asset caching strategies.'
    ],
    category: 'Web & Chrome',
    tagColor: 'yellow',
    date: 'Wed, Jan 6',
    isoDate: '2027-01-06',
    time: '5:30 PM – 7:30 PM IST',
    venue: 'Virtual · Google Meet link shared upon registration',
    isVirtual: true,
    status: 'upcoming',
    featured: false,
    registrationUrl: '#',
    agenda: [
      { time: '5:30 PM – 6:15 PM', topic: 'Demystifying INP, LCP, and CLS' },
      { time: '6:15 PM – 7:15 PM', topic: 'Trace Walkthrough: Fixing 4 Real-world Slowdowns' },
      { time: '7:15 PM – 7:30 PM', topic: 'Open Discussion & Benchmark Tools' }
    ],
    prerequisites: [
      'Modern Chromium-based browser',
      'Familiarity with HTML/CSS/JavaScript'
    ]
  },
  {
    id: 'event-4',
    slug: 'open-source-kickoff',
    title: 'Open Source Engine: Git Internals & PR Etiquette',
    tagline: 'Understanding the Git object database and contributing to ecosystem tooling.',
    description: 'Learn how commits, trees, and blobs work under the hood, how to rebase cleanly, and how to write issue descriptions maintainers love.',
    fullDescription: [
      'Understanding Git from the inside out makes merge conflicts and interactive rebases intuitive rather than intimidating.',
      'In this workshop, participants inspected `.git/objects`, practiced bisecting bugs, and submitted genuine PRs to open-source developer documentation.'
    ],
    category: 'Open Source',
    tagColor: 'red',
    date: 'Sat, Nov 7',
    isoDate: '2026-11-07',
    time: '11:00 AM – 2:00 PM IST',
    venue: 'IEM Seminar Hall, RVCE Campus',
    isVirtual: false,
    status: 'past',
    featured: false,
    agenda: [
      { time: '11:00 AM – 12:00 PM', topic: 'Dissecting .git: Trees, Blobs, and Commits' },
      { time: '12:00 PM – 1:15 PM', topic: 'Rebase, Bisect, and Conflict Resolution Lab' },
      { time: '1:15 PM – 2:00 PM', topic: 'First Pull Request Sprint' }
    ]
  },
  {
    id: 'event-5',
    slug: 'flutter-canvas-deep-dive',
    title: 'Flutter UI: Custom Painters & Gestures',
    tagline: 'Building 60fps animations, custom shaders, and responsive mobile widgets.',
    description: 'An exploration of graphics pipelines, render objects, and multi-finger gesture arenas in Flutter.',
    fullDescription: [
      'We moved beyond built-in widgets to create responsive procedural charts and fluid gestures directly on the Flutter canvas.',
      'The session covered memory limits on high-refresh displays and how Impeller avoids shader compilation jank on mobile platforms.'
    ],
    category: 'Android',
    tagColor: 'green',
    date: 'Fri, Oct 23',
    isoDate: '2026-10-23',
    time: '4:00 PM – 6:30 PM IST',
    venue: 'Virtual · Google Meet',
    isVirtual: true,
    status: 'past',
    featured: false,
    agenda: [
      { time: '4:00 PM – 5:00 PM', topic: 'CustomPainter Lifecycle & RepaintBoundaries' },
      { time: '5:00 PM – 6:00 PM', topic: 'Building an Audio Visualizer Widget' },
      { time: '6:00 PM – 6:30 PM', topic: 'Impeller Architecture Review' }
    ]
  }
];
