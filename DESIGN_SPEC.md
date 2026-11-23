# GDG RVCE site: design spec

Style: editorial/typographic. Light theme default (warm off-white #faf9f5,
ink #202124) + dark mode toggle. Friendly, developer-focused, clearly GDG.

Colors: neutrals dominate; Google blue is primary; red/yellow/green only as
fills for tags, highlights and accents, with DARK text on them. Never colored/
text on the light background unless darkened and contrast-checked (Google
yellow and green fail as text). Check every color pair in both themes.

Type: Bricolage Grotesque (display, weight 500, line-height 1.0-1.1),
Inter (body 16-18px), JetBrains Mono (tags, dates, small labels).
Hero: clamp(44px, 8vw, 96px). Section headings ~48px.

Shape: 4px spacing base, cards 16px radius, pill tags with 2px borders,
borders instead of heavy shadows, 0.2s ease motion only.

Signature detail: ONE rotating word in the Home headline
("Build / Learn / Ship ... together"). Respect prefers-reduced-motion.

Home: hero (headline, one-line subtext, solid primary CTA "See upcoming
events" + lighter "Join the community", small terminal-style element),
chip/marquee strip of event types, bento grid (next event, latest recap,
community links), learn/build/ship 3-step strip, repeated CTA at the end.
Events: tab filters + search, EventCard grid, one event detail page
(big date, time, venue/online, solid Register button).
Team: big-type profile cards (name, role tag, short bio, links), color
accent on hover.

Shared: reusable EventCard (Home + Events), tag pills, buttons, nav, footer.
Placeholder logo. Mock data in a /data folder. Mobile first.

Banned (from the brief): analytics, RSVP/interest counters, attendee lists,
comments, chat, other companies' logos, real personal data, stat counters.
Credit all fonts/icons/images in the README.