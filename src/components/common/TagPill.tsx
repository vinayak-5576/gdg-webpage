import React from 'react';
import { TagColor } from '@/types';

interface TagPillProps {
  color?: TagColor | 'neutral';
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md';
}

const colorStyles: Record<TagColor | 'neutral', string> = {
  blue: 'bg-[var(--tag-blue-bg)] text-[var(--tag-blue-text)] border-[var(--tag-blue-border)]',
  red: 'bg-[var(--tag-red-bg)] text-[var(--tag-red-text)] border-[var(--tag-red-border)]',
  yellow: 'bg-[var(--tag-yellow-bg)] text-[var(--tag-yellow-text)] border-[var(--tag-yellow-border)]',
  green: 'bg-[var(--tag-green-bg)] text-[var(--tag-green-text)] border-[var(--tag-green-border)]',
  neutral: 'bg-surface-muted text-text-muted border-border',
};

export function TagPill({
  color = 'neutral',
  children,
  className = '',
  size = 'sm',
}: TagPillProps) {
  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3.5 py-1 text-sm';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-medium rounded-full border-2 transition-colors duration-200 select-none ${sizeClasses} ${colorStyles[color]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" aria-hidden="true" />
      {children}
    </span>
  );
}
