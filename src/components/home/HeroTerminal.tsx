import React from 'react';
import { Terminal } from 'lucide-react';
import { mockEvents } from '@/data/events';

export function HeroTerminal() {
  const nextEvent = mockEvents.find((e) => e.status === 'upcoming') || mockEvents[0];

  return (
    <div
      className="w-full max-w-lg rounded-card border border-border bg-surface-muted p-4 font-mono text-xs text-text-main transition-colors duration-200 select-text"
      role="region"
      aria-label="Terminal snippet"
    >
      {/* Top Window Bar - Solid neutral surface, no blur */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-border text-text-muted">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-border" />
          <span className="w-2.5 h-2.5 rounded-full bg-border" />
          <span className="w-2.5 h-2.5 rounded-full bg-border" />
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-text-muted">
          <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
          <span>rvce-campus ~ gdg</span>
        </div>
        <span className="text-[10px] text-text-muted">bash</span>
      </div>

      {/* Terminal Lines - "gdg next" command printing real upcoming event */}
      <div className="space-y-1.5 text-left text-xs leading-relaxed">
        <div className="flex items-center gap-2">
          <span className="text-google-blue font-bold select-none">❯</span>
          <span className="text-text-main font-medium">gdg next</span>
        </div>
        <div className="pl-4 space-y-0.5 text-text-muted">
          <div>
            <span className="text-text-main font-medium">{nextEvent.title}</span>
          </div>
          <div>
            <span>When:  </span>
            <span className="text-text-secondary">{nextEvent.date} &bull; {nextEvent.time}</span>
          </div>
          <div>
            <span>Where: </span>
            <span className="text-text-secondary">{nextEvent.venue}</span>
          </div>
          <div>
            <span>Track: </span>
            <span className="text-text-secondary">{nextEvent.category}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 pt-1 text-text-muted">
          <span className="text-google-blue font-bold select-none">❯</span>
          {/* Static cursor without animate-pulse */}
          <span className="inline-block w-2 h-3.5 bg-text-main align-middle" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}