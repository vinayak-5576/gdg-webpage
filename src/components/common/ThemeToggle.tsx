'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle visual theme"
      title={mounted ? `Switch to ${isDark ? 'light' : 'dark'} mode` : 'Toggle visual theme'}
      className="w-9 h-9 rounded-full border border-border bg-surface hover:bg-surface-muted flex items-center justify-center text-text-muted hover:text-text-main transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:outline-none"
    >
      {mounted ? (
        isDark ? (
          <Sun className="w-4 h-4 text-google-yellow" aria-hidden="true" />
        ) : (
          <Moon className="w-4 h-4 text-text-main" aria-hidden="true" />
        )
      ) : (
        <span className="w-4 h-4 rounded-full border border-border block opacity-40" aria-hidden="true" />
      )}
    </button>
  );
}
