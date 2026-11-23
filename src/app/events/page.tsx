import React from 'react';
import type { Metadata } from 'next';
import { mockEvents } from '@/data/events';
import { EventsExplorer } from '@/components/events/EventsExplorer';

export const metadata: Metadata = {
  title: 'Events & Workshops · GDG on Campus RVCE',
  description:
    'Browse upcoming and past technical workshops, hack sprints, and developer study jams at RV College of Engineering.',
};

export default function EventsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      {/* Editorial Header */}
      <div className="space-y-3 max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-wider text-google-blue font-semibold">
          Community Calendar
        </span>
        <h1 className="section-heading text-text-main font-display">
          Events & Workshops
        </h1>
        <p className="text-base text-text-muted leading-relaxed">
          Hands-on sessions, build sprints, and tech deep dives hosted by GDG on Campus RVCE. Join fellow student developers to build and learn together.
        </p>
      </div>

      {/* Explorer: Search, filter tabs, responsive grid */}
      <EventsExplorer initialEvents={mockEvents} />
    </div>
  );
}
