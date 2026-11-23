import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Calendar,
  Clock,
  MapPin,
  Globe,
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { mockEvents } from '@/data/events';
import { TagPill } from '@/components/common/TagPill';
import { Button } from '@/components/common/Button';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return mockEvents.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = mockEvents.find((e) => e.slug === slug);

  if (!event) {
    return {
      title: 'Event Not Found · GDG on Campus RVCE',
    };
  }

  return {
    title: `${event.title} · GDG on Campus RVCE`,
    description: event.description,
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = mockEvents.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  const isUpcoming = event.status === 'upcoming';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* 1. Back Navigation */}
      <div>
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-xs font-mono font-medium text-text-muted hover:text-text-main transition-colors duration-200 group focus-visible:outline-none"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>All events & workshops</span>
        </Link>
      </div>

      {/* 2. Event Header Section */}
      <header className="space-y-6 border-b border-border pb-10">
        {/* Meta badges */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <TagPill color={event.tagColor}>{event.category}</TagPill>
          <span
            className={`font-mono text-xs uppercase px-2.5 py-0.5 rounded-full border ${
              isUpcoming
                ? 'border-google-blue/30 text-google-blue bg-google-blue/5'
                : 'border-border text-text-muted bg-surface-muted'
            }`}
          >
            {isUpcoming ? 'Upcoming Workshop' : 'Event Concluded'}
          </span>
        </div>

        {/* Big Typographic Date - contrast verified */}
        <div className="font-mono text-sm sm:text-base text-[#174EA6] dark:text-google-blue font-medium tracking-tight">
          {event.date}
        </div>

        {/* Title */}
        <h1 className="hero-headline font-display text-text-main text-balance !text-3xl sm:!text-5xl">
          {event.title}
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl">
          {event.tagline}
        </p>

        {/* Action Callout Bar */}
        <div className="pt-2">
          {isUpcoming ? (
            <div className="flex flex-wrap items-center gap-4">
              {event.registrationUrl && (
                <Button
                  href={event.registrationUrl}
                  external
                  size="lg"
                  variant="primary"
                >
                  <span>Register for session</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
                </Button>
              )}
              <span className="text-xs font-mono text-text-muted">
                Free participation · Open to RVCE students
              </span>
            </div>
          ) : (
            /* Concluded event notice: No register button */
            <div className="rounded-xl border border-border bg-surface-muted p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-xs text-text-main">
                <AlertCircle className="w-4 h-4 text-text-muted shrink-0" aria-hidden="true" />
                <span>This event has ended. Check the summary and takeaways below.</span>
              </div>
              <Link
                href="/events"
                className="text-xs font-mono font-medium text-google-blue hover:underline underline-offset-4 inline-flex items-center gap-1"
              >
                <span>Browse upcoming sessions</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* 3. Logistics Overview Grid */}
      <section aria-labelledby="logistics-heading" className="space-y-4">
        <h2 id="logistics-heading" className="text-xs font-mono uppercase tracking-wider text-text-muted">
          Session Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Time Card */}
          <div className="bg-surface rounded-card border border-border p-5 flex items-start gap-3.5">
            <Clock className="w-4 h-4 text-google-blue mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <span className="text-xs font-mono text-text-muted block">Time & Schedule</span>
              <span className="text-sm font-medium text-text-main mt-0.5 block">
                {event.time}
              </span>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-surface rounded-card border border-border p-5 flex items-start gap-3.5">
            {event.isVirtual ? (
              <Globe className="w-4 h-4 text-google-green mt-0.5 shrink-0" aria-hidden="true" />
            ) : (
              <MapPin className="w-4 h-4 text-google-red mt-0.5 shrink-0" aria-hidden="true" />
            )}
            <div>
              <span className="text-xs font-mono text-text-muted block">
                {event.isVirtual ? 'Format & Platform' : 'Campus Venue'}
              </span>
              <span className="text-sm font-medium text-text-main mt-0.5 block leading-snug">
                {event.venue}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Full Overview & Background */}
      {event.fullDescription && event.fullDescription.length > 0 && (
        <section aria-labelledby="overview-heading" className="space-y-4 pt-4">
          <h2 id="overview-heading" className="text-xs font-mono uppercase tracking-wider text-text-muted">
            Overview
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed bg-surface rounded-card border border-border p-6 sm:p-8">
            {event.fullDescription.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </section>
      )}

      {/* 5. Agenda Timeline */}
      {event.agenda && event.agenda.length > 0 && (
        <section aria-labelledby="agenda-heading" className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h2 id="agenda-heading" className="text-xs font-mono uppercase tracking-wider text-text-muted">
              Agenda & Timeline
            </h2>
            <span className="text-xs font-mono text-text-muted">
              {event.agenda.length} sessions
            </span>
          </div>

          <div className="space-y-3">
            {event.agenda.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface rounded-card border border-border p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 transition-colors duration-200"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-google-blue shrink-0 mt-1.5 sm:mt-0" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-medium text-text-main">
                      {item.topic}
                    </h3>
                    {item.speaker && (
                      <span className="text-xs text-text-muted font-mono block mt-0.5">
                        Lead: {item.speaker}
                      </span>
                    )}
                  </div>
                </div>
                <span className="font-mono text-xs text-text-muted shrink-0 pl-5 sm:pl-0">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. Prerequisites / What to Bring */}
      {event.prerequisites && event.prerequisites.length > 0 && (
        <section aria-labelledby="prereq-heading" className="space-y-4 pt-4">
          <h2 id="prereq-heading" className="text-xs font-mono uppercase tracking-wider text-text-muted">
            Prerequisites & Preparation
          </h2>
          <div className="bg-surface rounded-card border border-border p-6">
            <ul className="space-y-2.5">
              {event.prerequisites.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-google-green shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="leading-snug">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 7. Bottom Navigation Link */}
      <div className="pt-6 border-t border-border flex items-center justify-between">
        <Link
          href="/events"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-text-main hover:text-google-blue transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to all events</span>
        </Link>
      </div>
    </div>
  );
}
