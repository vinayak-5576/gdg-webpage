'use client';

import React, { useState, useMemo } from 'react';
import { TeamMember } from '@/types';
import { TeamCard } from './TeamCard';

interface TeamExplorerProps {
  initialMembers: TeamMember[];
}

type VerticalFilter = 'all' | 'Core' | 'Dev' | 'Design' | 'Outreach';

const verticals: { id: VerticalFilter; label: string }[] = [
  { id: 'all', label: 'All Members' },
  { id: 'Core', label: 'Core Team' },
  { id: 'Dev', label: 'Dev Vertical' },
  { id: 'Design', label: 'Design' },
  { id: 'Outreach', label: 'Outreach' },
];

export function TeamExplorer({ initialMembers }: TeamExplorerProps) {
  const [activeVertical, setActiveVertical] = useState<VerticalFilter>('all');

  const filteredMembers = useMemo(() => {
    if (activeVertical === 'all') {
      return initialMembers;
    }
    return initialMembers.filter((m) => m.vertical === activeVertical);
  }, [initialMembers, activeVertical]);

  return (
    <div className="space-y-8">
      {/* Vertical Filter Tabs */}
      <div className="bg-surface rounded-card border border-border p-3 sm:p-4 flex items-center justify-between gap-4 overflow-x-auto select-none">
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <span className="text-xs font-mono text-text-muted mr-2 hidden sm:inline-block">
            Vertical:
          </span>
          {verticals.map((vert) => {
            const isActive = activeVertical === vert.id;
            return (
              <button
                key={vert.id}
                type="button"
                onClick={() => setActiveVertical(vert.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-colors duration-200 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:outline-none ${
                  isActive
                    ? 'bg-text-main text-base shadow-sm border border-text-main'
                    : 'bg-surface-muted text-text-muted hover:text-text-main hover:bg-surface border border-border'
                }`}
                aria-pressed={isActive}
              >
                {vert.label}
              </button>
            );
          })}
        </div>

        <span className="text-xs font-mono text-text-muted whitespace-nowrap hidden sm:inline-block pr-2">
          {filteredMembers.length} {filteredMembers.length === 1 ? 'member' : 'members'}
        </span>
      </div>

      {/* Grid: 1 col mobile, 2 tablet, 3 desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
