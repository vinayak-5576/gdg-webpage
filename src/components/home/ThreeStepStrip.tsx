import React from 'react';
import { threeSteps } from '@/data/community';
import { TagPill } from '@/components/common/TagPill';

export function ThreeStepStrip() {
  return (
    <section aria-labelledby="method-heading" className="w-full">
      <div className="mb-6">
        {/* Sentence-case section label, mono font, no uppercase, no tracking */}
        <span className="font-mono text-xs text-google-blue font-semibold">
          How we work
        </span>
        <h2 id="method-heading" className="section-heading mt-1 text-text-main font-display">
          Built by students, driven by curiosity.
        </h2>
      </div>

      {/* One wide panel, three columns separated by hairlines, no numbers, no per-item boxes */}
      <div className="rounded-card border border-border bg-surface p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
        {threeSteps.map((item, idx) => (
          <div
            key={item.step}
            className={`flex flex-col justify-between py-6 md:py-0 ${
              idx === 0
                ? 'pt-0 md:pr-6'
                : idx === 1
                ? 'md:px-6'
                : 'pb-0 md:pl-6'
            }`}
          >
            <div>
              <div className="mb-4">
                <TagPill color={item.tagColor} className="whitespace-nowrap">
                  {item.pill}
                </TagPill>
              </div>

              <h3 className="font-display font-medium text-xl sm:text-2xl text-text-main tracking-tight">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}