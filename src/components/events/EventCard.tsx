import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, MapPin, Globe, ArrowRight, ArrowUpRight } from 'lucide-react';
import { EventItem, TagColor } from '@/types';
import { TagPill } from '@/components/common/TagPill';
import { Button } from '@/components/common/Button';

interface EventCardProps {
  event: EventItem;
  featured?: boolean;
}

const categoryBorderTop: Record<TagColor, string> = {
  blue: 'border-t-google-blue',
  red: 'border-t-google-red',
  yellow: 'border-t-google-yellow',
  green: 'border-t-google-green',
};

export function EventCard({ event, featured = false }: EventCardProps) {
  const isUpcoming = event.status === 'upcoming';

  return (
    <article
      className={`group relative flex flex-col justify-between bg-surface rounded-card border-x border-b border-t-4 border-border ${
        categoryBorderTop[event.tagColor]
      } p-6 transition-all duration-200 ease-out hover:border-border-strong ${
        featured ? 'md:p-8' : ''
      }`}
    >
      <div>
        {/* Top Meta: Category tag & Status */}
        <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
          <TagPill color={event.tagColor}>{event.category}</TagPill>
          <span
            className={`font-mono text-xs uppercase px-2.5 py-0.5 rounded-full border ${
              isUpcoming
                ? 'border-google-blue/30 text-google-blue bg-google-blue/5'
                : 'border-border text-text-muted bg-surface-muted'
            }`}
          >
            {isUpcoming ? 'Upcoming' : 'Concluded'}
          </span>
        </div>

        {/* Title & Tagline */}
        <Link
          href={`/events/${event.slug}`}
          className="group/title block focus-visible:outline-none"
        >
          <h3
            className={`font-display font-medium text-text-main group-hover/title:text-google-blue transition-colors duration-200 tracking-tight ${
              featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
            }`}
          >
            {event.title}
          </h3>
          <p className="mt-2 text-sm text-text-muted leading-relaxed line-clamp-2">
            {event.tagline}
          </p>
        </Link>

        {/* Logistics Grid - date & time each on one line with no wrapping, venue may wrap */}
        <div className="mt-6 pt-5 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-text-muted font-mono">
          <div className="flex items-center gap-2 whitespace-nowrap shrink-0">
            <Calendar className="w-3.5 h-3.5 text-text-main shrink-0" aria-hidden="true" />
            <span className="whitespace-nowrap">{event.date}</span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap shrink-0">
            <Clock className="w-3.5 h-3.5 text-text-main shrink-0" aria-hidden="true" />
            <span className="whitespace-nowrap">{event.time}</span>
          </div>
          <div className="flex items-start gap-2 sm:col-span-2">
            {event.isVirtual ? (
              <Globe className="w-3.5 h-3.5 text-text-main shrink-0 mt-0.5" aria-hidden="true" />
            ) : (
              <MapPin className="w-3.5 h-3.5 text-text-main shrink-0 mt-0.5" aria-hidden="true" />
            )}
            <span className="leading-snug">{event.venue}</span>
          </div>
        </div>
      </div>

      {/* Action footer */}
      <div className="mt-8 pt-5 border-t border-border flex items-center justify-between gap-3 flex-wrap">
        {/* Internal link uses -> */}
        <Link
          href={`/events/${event.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-text-main hover:text-google-blue transition-colors duration-200 group-hover:underline underline-offset-4"
        >
          <span>View event details</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>

        {/* Register CTA ONLY on upcoming events, external uses ↗ */}
        {isUpcoming && event.registrationUrl && (
          <Button
            href={event.registrationUrl}
            external
            size="sm"
            variant="primary"
            aria-label={`Register for ${event.title}`}
          >
            <span>Register</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
          </Button>
        )}
      </div>
    </article>
  );
}
