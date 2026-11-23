import React from 'react';
import { Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { TeamMember, TagColor } from '@/types';
import { TagPill } from '@/components/common/TagPill';

interface TeamCardProps {
  member: TeamMember;
}

const borderAccentHover: Record<TagColor, string> = {
  blue: 'hover:border-google-blue focus-within:border-google-blue',
  red: 'hover:border-google-red focus-within:border-google-red',
  yellow: 'hover:border-google-yellow focus-within:border-google-yellow',
  green: 'hover:border-google-green focus-within:border-google-green',
};

const avatarFillStyles: Record<TagColor, string> = {
  blue: 'bg-[#D2E3FC] text-[#202124] border-[#AECBFA] dark:bg-[#8AB4F8] dark:text-[#111215] dark:border-[#8AB4F8]',
  red: 'bg-[#FCE8E6] text-[#202124] border-[#FAD2CF] dark:bg-[#F28B82] dark:text-[#111215] dark:border-[#F28B82]',
  yellow: 'bg-[#FEEFC3] text-[#202124] border-[#FEEFC3] dark:bg-[#FDD663] dark:text-[#111215] dark:border-[#FDD663]',
  green: 'bg-[#CEEAD6] text-[#202124] border-[#CEEAD6] dark:bg-[#81C995] dark:text-[#111215] dark:border-[#81C995]',
};

export function TeamCard({ member }: TeamCardProps) {
  // Extract number from member-1, member-2 -> 01, 02
  const memberIndex = member.id.replace('member-', '').padStart(2, '0');

  return (
    <article
      className={`group relative flex flex-col justify-between bg-surface rounded-card border border-border p-6 sm:p-7 transition-colors duration-200 ease-out ${
        borderAccentHover[member.accentColor]
      }`}
    >
      <div>
        {/* Top Meta: Asymmetrical Header with vertical tracking code & Initials Avatar */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-text-muted tracking-wider block">
              #{memberIndex} &bull; {member.vertical.toUpperCase()}
            </span>
            <TagPill color={member.accentColor} className="mt-2 inline-flex">
              {member.role}
            </TagPill>
          </div>

          {/* Initials Avatar - Contrast-checked dark ink on Google color fill, no photos */}
          <div
            className={`w-14 h-14 rounded-full border-2 flex items-center justify-center font-mono font-bold text-base tracking-wide select-none shrink-0 ${
              avatarFillStyles[member.accentColor]
            }`}
            aria-hidden="true"
          >
            {member.initials}
          </div>
        </div>

        {/* Big-Type Name: ~36-40px in display font (text-3xl sm:text-[2.35rem]) */}
        <h3 className="font-display font-medium text-3xl sm:text-[2.35rem] leading-[1.1] text-text-main tracking-tight group-hover:text-google-blue transition-colors duration-200">
          {member.name}
        </h3>

        {/* Hairline Separator */}
        <div className="w-8 h-[1px] bg-border my-4" />

        {/* Friendly Bio */}
        <p className="text-sm text-text-secondary leading-relaxed">
          {member.bio}
        </p>
      </div>

      {/* Social Links Footer - Accessible keyboard focus, href="#" placeholders */}
      <div className="mt-8 pt-5 border-t border-border flex items-center gap-2.5">
        {member.links.github && (
          <a
            href={member.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub profile of ${member.name}`}
            className="w-8 h-8 rounded-full border border-border bg-surface-muted/60 hover:bg-surface-muted flex items-center justify-center text-text-muted hover:text-text-main transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:outline-none"
          >
            <Github className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        )}

        {member.links.linkedin && (
          <a
            href={member.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn profile of ${member.name}`}
            className="w-8 h-8 rounded-full border border-border bg-surface-muted/60 hover:bg-surface-muted flex items-center justify-center text-text-muted hover:text-text-main transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:outline-none"
          >
            <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        )}

        {member.links.twitter && (
          <a
            href={member.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Twitter profile of ${member.name}`}
            className="w-8 h-8 rounded-full border border-border bg-surface-muted/60 hover:bg-surface-muted flex items-center justify-center text-text-muted hover:text-text-main transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:outline-none"
          >
            <Twitter className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        )}

        {member.links.portfolio && (
          <a
            href={member.links.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Personal portfolio of ${member.name}`}
            className="w-8 h-8 rounded-full border border-border bg-surface-muted/60 hover:bg-surface-muted flex items-center justify-center text-text-muted hover:text-text-main transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:outline-none"
          >
            <Globe className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}