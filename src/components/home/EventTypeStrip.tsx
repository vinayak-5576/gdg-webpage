import React from 'react';
import Link from 'next/link';
import { mockEvents } from '@/data/events';
import { TagColor } from '@/types';

const categoryDotColor: Record<TagColor, string> = {
  blue: 'bg-google-blue',
  red: 'bg-google-red',
  yellow: 'bg-google-yellow',
  green: 'bg-google-green',
};

export function EventTypeStrip() {
  const upcomingEvents = mockEvents
    .filter((e) => e.status === 'upcoming')
    .slice(0, 4);

  return (
    <section
      aria-label="Coming up: next workshops and build sessions"
      className="w-full border-y border-border bg-surface py-3 transition-colors duration-200 select-none"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 overflow-x-auto no-scrollbar sm:flex-wrap">
        <span className="font-mono text-xs text-text-muted whitespace-nowrap shrink-0">
          Coming up:
        </span>

        {upcomingEvents.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.slug}`}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface-muted hover:border-border-strong hover:bg-surface text-xs font-mono transition-colors duration-200 shrink-0"
          >
            <span
              className={`w-2 h-2 rounded-full shrink-0 ${categoryDotColor[event.tagColor]}`}
              aria-hidden="true"
            />
            <span className="text-text-muted">{event.date}</span>
            <span className="text-border" aria-hidden="true">&bull;</span>
            <span className="text-text-main font-medium">{event.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}