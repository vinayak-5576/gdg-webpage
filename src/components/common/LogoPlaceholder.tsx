import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export function LogoPlaceholder({ className = '' }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="GDG on Campus RVCE - Homepage"
      className={`inline-flex items-center transition-colors duration-200 hover:text-google-blue focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:outline-none rounded-md py-1 ${className}`}
    >
      {/* Plain text wordmark without drawing or imitating the logo */}
      <span className="font-display font-medium text-lg sm:text-xl tracking-tight text-text-main">
        GDG on Campus RVCE
      </span>
    </Link>
  );
}
