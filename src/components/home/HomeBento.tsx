import React from 'react';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { mockEvents } from '@/data/events';
import { latestRecap, communityLinks } from '@/data/community';
import { TagPill } from '@/components/common/TagPill';
import { Button } from '@/components/common/Button';

export function HomeBento() {
  const nextEvent = mockEvents.find((e) => e.status === 'upcoming') || mockEvents[0];

  return (
    <section aria-labelledby="bento-heading" className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          {/* Sentence-case section label, mono font, no uppercase, no tracking */}
          <span className="font-mono text-xs text-google-blue font-semibold">
            In focus
          </span>
          <h2 id="bento-heading" className="section-heading mt-1 text-text-main font-display">
            What we are building right now.
          </h2>
        </div>
        {/* Internal link uses -> with hover color change, no translate */}
        <Link
          href="/events"
          className="text-xs font-mono font-medium text-text-main hover:text-google-blue transition-colors flex items-center gap-1.5 group"
        >
          <span>All upcoming & past events</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:text-google-blue transition-colors" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Next Event Tile - 7 cols, solid surface, category border */}
        <div className="lg:col-span-7 bg-surface rounded-card border-x border-b border-t-4 border-border border-t-google-blue p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:border-border-strong">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full border border-google-blue/30 text-google-blue bg-google-blue/5 font-medium">
                  Next workshop
                </span>
                <TagPill color={nextEvent.tagColor}>{nextEvent.category}</TagPill>
              </div>
              <span className="font-mono text-xs text-text-muted">{nextEvent.date}</span>
            </div>

            <Link href={`/events/${nextEvent.slug}`} className="group block focus-visible:outline-none">
              <h3 className="font-display font-medium text-2xl sm:text-3xl text-text-main group-hover:text-google-blue transition-colors duration-200 tracking-tight">
                {nextEvent.title}
              </h3>
            </Link>

            <p className="mt-3 text-sm text-text-muted leading-relaxed">
              {nextEvent.description}
            </p>

            {/* Solid neutral step - bg-surface-muted, no alpha opacity */}
            <div className="mt-6 p-4 rounded-xl border border-border bg-surface-muted grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-text-muted">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-text-main shrink-0" aria-hidden="true" />
                <span>{nextEvent.time}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-text-main shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-snug">{nextEvent.venue}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-border flex items-center justify-between gap-3 flex-wrap">
            {/* Internal link uses -> */}
            <Link
              href={`/events/${nextEvent.slug}`}
              className="text-xs font-mono text-text-main hover:text-google-blue flex items-center gap-1.5"
            >
              <span>Explore session details & agenda</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>

            {/* External register uses ↗ */}
            {nextEvent.registrationUrl && (
              <Button href={nextEvent.registrationUrl} external size="sm" variant="primary">
                <span>Register for workshop</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
              </Button>
            )}
          </div>
        </div>

        {/* Latest Recap Tile - 5 cols */}
        <div className="lg:col-span-5 bg-surface rounded-card border-x border-b border-t-4 border-border border-t-google-red p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:border-border-strong">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <TagPill color={latestRecap.tagColor}>{latestRecap.tag}</TagPill>
              <span className="font-mono text-xs text-text-muted">{latestRecap.date}</span>
            </div>

            <h3 className="font-display font-medium text-xl sm:text-2xl text-text-main tracking-tight">
              {latestRecap.title}
            </h3>

            <p className="mt-3 text-sm text-text-muted leading-relaxed">
              {latestRecap.summary}
            </p>

            <ul className="mt-5 space-y-2.5">
              {latestRecap.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-text-muted">
                  <CheckCircle2 className="w-4 h-4 text-google-green shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-5 border-t border-border">
            {/* Internal link uses -> */}
            <Link
              href="/events"
              className="text-xs font-mono font-medium text-text-main hover:text-google-blue flex items-center gap-1.5"
            >
              <span>Read more in past event archives</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Community Links Tile - full width 12 cols */}
        <div className="lg:col-span-12 bg-surface rounded-card border border-border p-6 sm:p-8 transition-colors duration-200 hover:border-border-strong">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-border">
            <div>
              {/* Sentence-case section label, mono font, no uppercase, no tracking */}
              <span className="font-mono text-xs text-text-muted">
                Ecosystem
              </span>
              <h3 className="font-display font-medium text-xl text-text-main tracking-tight mt-1">
                Community Hubs & Channels
              </h3>
            </div>
            <p className="text-xs text-text-muted max-w-md">
              Connect with chapter leads, share repository pull requests, and participate in peer code clinics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {communityLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group/link flex flex-col justify-between p-4 rounded-xl border border-border bg-surface-muted hover:border-border-strong transition-colors duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded-full border border-border bg-surface text-text-muted font-medium">
                      {item.badge}
                    </span>
                    {/* External link uses ↗ with color change on hover, no translation */}
                    <ArrowUpRight className="w-4 h-4 text-text-muted group-hover/link:text-google-blue transition-colors" />
                  </div>
                  <h4 className="font-medium text-sm text-text-main group-hover/link:text-google-blue transition-colors">
                    {item.name}
                  </h4>
                  <p className="mt-1 text-xs text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}