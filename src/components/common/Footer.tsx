import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-base mt-24 py-16 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border">
          {/* Main info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-medium text-lg sm:text-xl tracking-tight text-text-main">
                GDG on Campus RVCE
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed max-w-md">
              A student-led developer community dedicated to exploring modern cloud systems, Android apps, and web platforms. Built by students, for students.
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              GDG on Campus RVCE is an independent developer group. Activities and opinions expressed here should in no way be considered as that of Google, the corporation.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-text-muted">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-text-main hover:text-google-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-text-main hover:text-google-blue transition-colors">
                  Events & Workshops
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-text-main hover:text-google-blue transition-colors">
                  Organizing Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-text-muted">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-text-main hover:text-google-blue transition-colors inline-flex items-center gap-1"
                >
                  <span>Events portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-muted" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-main hover:text-google-blue transition-colors inline-flex items-center gap-1"
                >
                  <span>GitHub Organization</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-muted" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-main hover:text-google-blue transition-colors inline-flex items-center gap-1"
                >
                  <span>Developer Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-muted" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Typography Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-text-muted">
          <p>© 2026 GDG on Campus RVCE. Student developer community at RV College of Engineering.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px]">
            <span>Type: Bricolage Grotesque · Inter · JetBrains Mono</span>
            <span>Icons: Lucide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
