import React from 'react';
import type { Metadata } from 'next';
import { mockTeamMembers } from '@/data/team';
import { TeamExplorer } from '@/components/team/TeamExplorer';

export const metadata: Metadata = {
  title: 'Organizing Team · GDG on Campus RVCE',
  description:
    'Meet the student leads and vertical organizers behind Google Developer Group on Campus at RV College of Engineering.',
};

export default function TeamPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      {/* Editorial Header */}
      <div className="space-y-3 max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-wider text-google-blue font-semibold">
          People Behind The Community
        </span>
        <h1 className="section-heading text-text-main font-display">
          The Organizing Team
        </h1>
        <p className="text-base text-text-muted leading-relaxed">
          Students across branches and years organizing technical workshops, maintaining open repos, and building developer community at RVCE.
        </p>
      </div>

      {/* Explorer: Vertical tabs + responsive team card grid */}
      <TeamExplorer initialMembers={mockTeamMembers} />
    </div>
  );
}
