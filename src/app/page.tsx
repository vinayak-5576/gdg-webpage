import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HeroRotatingWord } from '@/components/home/HeroRotatingWord';
import { HeroTerminal } from '@/components/home/HeroTerminal';
import { EventTypeStrip } from '@/components/home/EventTypeStrip';
import { HomeBento } from '@/components/home/HomeBento';
import { ThreeStepStrip } from '@/components/home/ThreeStepStrip';
import { Button } from '@/components/common/Button';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-16">
      {/* 1. HERO SECTION */}
      <section
        aria-labelledby="hero-title"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline (fits in ~2-3 lines), plain student subtext, dual CTAs */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Headline: max ~80px clamp, fits in 2-3 lines at all breakpoints */}
            <h1
              id="hero-title"
              className="hero-headline font-display text-text-main text-balance"
            >
              <HeroRotatingWord /> together at RVCE.
            </h1>

            {/* Subtext: plain sentence on what students actually do */}
            <p className="text-base sm:text-lg text-text-muted max-w-xl leading-relaxed">
              We run hands-on workshops, build days, and study jams to help students explore cloud systems, Android apps, and web technologies together.
            </p>

            {/* Dual CTAs in initial viewport */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button href="/events" size="lg" variant="primary">
                <span>See upcoming events</span>
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
              <Button href="#community-hub" size="lg" variant="secondary">
                <span>Join the community</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Terminal snippet element, vertically aligned */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <HeroTerminal />
          </div>
        </div>
      </section>

      {/* 2. COMING UP STRIP */}
      <EventTypeStrip />

      {/* 3. BENTO GRID */}
      <div id="community-hub" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <HomeBento />
      </div>

      {/* 4. THREE-STEP STRIP (How we work) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <ThreeStepStrip />
      </div>

      {/* 5. REPEATED CTA AT END */}
      <section
        aria-label="Join Call to Action"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="rounded-card border border-border bg-surface p-8 sm:p-14 text-center flex flex-col items-center justify-center space-y-6">
          {/* Sentence-case section label, mono font, no uppercase, no tracking */}
          <span className="font-mono text-xs text-google-blue font-semibold">
            Get involved
          </span>
          <h2 className="section-heading text-text-main max-w-2xl text-balance font-display">
            Ready to build with fellow RVCE developers?
          </h2>
          {/* Explicit high-contrast text color with guaranteed opacity: 1 */}
          <p
            className="text-base text-text-secondary max-w-xl leading-relaxed font-normal opacity-100"
            style={{ opacity: 1 }}
          >
            Whether you are writing your first lines of Kotlin, setting up cloud services, or contributing to your first open-source project, there is a place for your ideas.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/events" size="md" variant="primary">
              <span>Browse upcoming workshops</span>
              <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
            </Button>
            <Button href="/team" size="md" variant="secondary">
              <span>Meet the organizing team</span>
              <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}