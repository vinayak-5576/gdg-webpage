export type TagColor = 'blue' | 'red' | 'yellow' | 'green';

export type EventCategory = 'Android' | 'Cloud & AI' | 'Web & Chrome' | 'Open Source';

export interface AgendaItem {
  time: string;
  topic: string;
  speaker?: string;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription?: string[];
  category: EventCategory;
  tagColor: TagColor;
  date: string;
  isoDate: string;
  time: string;
  venue: string;
  isVirtual: boolean;
  status: 'upcoming' | 'past';
  featured?: boolean;
  registrationUrl?: string; // Only provided for upcoming events
  agenda?: AgendaItem[];
  prerequisites?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  vertical: 'Core' | 'Dev' | 'Design' | 'Outreach';
  bio: string;
  initials: string;
  accentColor: TagColor;
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    portfolio?: string;
  };
}

export interface CommunityTrack {
  id: string;
  title: string;
  subtitle: string;
  tagColor: TagColor;
}

export interface RecapItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  highlights: string[];
  tag: string;
  tagColor: TagColor;
}
