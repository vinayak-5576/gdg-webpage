import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: 'var(--bg-base)',
        surface: 'var(--bg-surface)',
        'surface-muted': 'var(--bg-muted)',
        border: 'var(--border-color)',
        'border-strong': 'var(--border-strong)',
        'text-main': 'var(--text-primary)',
        'text-muted': 'var(--text-secondary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        google: {
          blue: 'var(--google-blue)',
          red: 'var(--google-red)',
          yellow: 'var(--google-yellow)',
          green: 'var(--google-green)',
        },
      },
      fontFamily: {
        display: ['var(--font-bricolage)', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'Consolas', 'Menlo', 'monospace'],
      },
      borderRadius: {
        'card': '16px',
        'pill': '9999px',
      },
      transitionDuration: {
        '200': '200ms',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
