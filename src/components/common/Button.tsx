import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 ease-out select-none focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none';

  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs tracking-tight',
    md: 'px-5 py-2.5 text-sm tracking-tight',
    lg: 'px-7 py-3 text-base tracking-tight',
  }[size];

  const variantClasses = {
    // Solid Google blue or dark ink
    primary:
      'bg-google-blue text-white hover:bg-google-blue/90 border border-transparent shadow-none active:scale-[0.98]',
    // Lighter / secondary CTA: warm neutral surface with crisp 1.5px border
    secondary:
      'bg-surface hover:bg-surface-muted text-text-main border border-border hover:border-border-strong active:scale-[0.98]',
    outline:
      'bg-transparent hover:bg-surface-muted text-text-main border border-border hover:border-text-main active:scale-[0.98]',
    ghost:
      'bg-transparent hover:bg-surface-muted text-text-muted hover:text-text-main active:scale-[0.98]',
  }[variant];

  const fullClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={fullClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={fullClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={fullClasses} {...props}>
      {children}
    </button>
  );
}
