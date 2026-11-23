import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/common/Button';

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 sm:py-32 text-center space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-text-muted text-xs font-mono">
        <span className="w-2 h-2 rounded-full bg-google-red" aria-hidden="true" />
        <span>Error 404 · Page Not Found</span>
      </div>

      <h1 className="hero-headline font-display text-text-main text-3xl sm:text-5xl">
        This session or page does not exist.
      </h1>

      <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-md mx-auto">
        The event slug or page you requested could not be found. It may have been moved, renamed, or is currently not scheduled.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
        <Button href="/events" size="md" variant="primary">
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          <span>Browse all events</span>
        </Button>
        <Button href="/" size="md" variant="secondary">
          <span>Go to homepage</span>
        </Button>
      </div>
    </div>
  );
}
