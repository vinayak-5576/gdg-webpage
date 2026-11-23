'use client';

import React, { useState, useMemo } from 'react';
import { Search, X, Calendar, Filter } from 'lucide-react';
import { EventItem, EventCategory } from '@/types';
import { EventCard } from './EventCard';
import { Button } from '@/components/common/Button';

interface EventsExplorerProps {
  initialEvents: EventItem[];
}

type StatusFilter = 'all' | 'upcoming' | 'past';
type CategoryFilter = 'all' | EventCategory;

const categories: EventCategory[] = [
  'Cloud & AI',
  'Android',
  'Web & Chrome',
  'Open Source',
];

export function EventsExplorer({ initialEvents }: EventsExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');

  const filteredEvents = useMemo(() => {
    return initialEvents.filter((event) => {
      // 1. Status filter
      if (statusFilter !== 'all' && event.status !== statusFilter) {
        return false;
      }

      // 2. Category filter
      if (categoryFilter !== 'all' && event.category !== categoryFilter) {
        return false;
      }

      // 3. Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = event.title.toLowerCase().includes(q);
        const matchesTagline = event.tagline.toLowerCase().includes(q);
        const matchesDescription = event.description.toLowerCase().includes(q);
        const matchesVenue = event.venue.toLowerCase().includes(q);
        const matchesCategory = event.category.toLowerCase().includes(q);
        return (
          matchesTitle ||
          matchesTagline ||
          matchesDescription ||
          matchesVenue ||
          matchesCategory
        );
      }

      return true;
    });
  }, [initialEvents, statusFilter, categoryFilter, searchQuery]);

  const hasActiveFilters =
    statusFilter !== 'all' || categoryFilter !== 'all' || searchQuery.trim().length > 0;

  const handleResetFilters = () => {
    setSearchQuery('');
    setStatusFilter('all');
    setCategoryFilter('all');
  };

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <div className="space-y-4 bg-surface rounded-card border border-border p-4 sm:p-6 transition-colors duration-200">
        {/* Search bar */}
        <div className="relative w-full">
          <label htmlFor="event-search" className="sr-only">
            Search events by topic, title, or keyword
          </label>
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-muted">
            <Search className="w-4 h-4" aria-hidden="true" />
          </div>
          <input
            id="event-search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by topic, keyword, or venue..."
            className="w-full pl-10 pr-10 py-2.5 bg-base border border-border rounded-xl text-sm text-text-main placeholder:text-text-muted transition-all duration-200 focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search query"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-muted hover:text-text-main"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Tab Filters: Status & Categories */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          {/* Status Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 select-none">
            <span className="text-xs font-mono text-text-muted mr-1 hidden sm:inline-block">
              Status:
            </span>
            {(['all', 'upcoming', 'past'] as StatusFilter[]).map((status) => {
              const isActive = statusFilter === status;
              const label =
                status === 'all'
                  ? 'All Events'
                  : status === 'upcoming'
                  ? 'Upcoming'
                  : 'Past';
              return (
                <button
                  key={status}
                  type="button"
                  onClick={() => setStatusFilter(status)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-colors duration-200 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:outline-none ${
                    isActive
                      ? 'bg-text-main text-base shadow-sm border border-text-main'
                      : 'bg-surface-muted text-text-muted hover:text-text-main hover:bg-surface border border-border'
                  }`}
                  aria-pressed={isActive}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Category Tabs (Horizontally scrollable on mobile) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 select-none">
            <span className="text-xs font-mono text-text-muted mr-1 hidden sm:inline-block">
              Track:
            </span>
            <button
              type="button"
              onClick={() => setCategoryFilter('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-colors duration-200 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:outline-none ${
                categoryFilter === 'all'
                  ? 'bg-text-main text-base border border-text-main'
                  : 'bg-surface-muted text-text-muted hover:text-text-main hover:bg-surface border border-border'
              }`}
              aria-pressed={categoryFilter === 'all'}
            >
              All Tracks
            </button>
            {categories.map((cat) => {
              const isActive = categoryFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-colors duration-200 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:outline-none ${
                    isActive
                      ? 'bg-text-main text-base border border-text-main'
                      : 'bg-surface-muted text-text-muted hover:text-text-main hover:bg-surface border border-border'
                  }`}
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Count & Reset indicator */}
      <div className="flex items-center justify-between text-xs font-mono text-text-muted px-1">
        <span>
          Showing {filteredEvents.length}{' '}
          {filteredEvents.length === 1 ? 'event' : 'events'}
        </span>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={handleResetFilters}
            className="text-google-blue hover:underline underline-offset-4 focus-visible:outline-none"
          >
            Reset all filters
          </button>
        )}
      </div>

      {/* Event Grid: 1 col mobile, 2 tablet, 3 desktop */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-card border border-border bg-surface p-12 text-center flex flex-col items-center justify-center space-y-4">
          <Calendar className="w-8 h-8 text-text-muted/60" aria-hidden="true" />
          <p className="text-sm text-text-secondary max-w-md">
            No events found matching your search. Try adjusting your keywords or clearing filters.
          </p>
          <Button size="sm" variant="secondary" onClick={handleResetFilters}>
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}
