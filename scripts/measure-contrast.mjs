// Exact W3C WCAG 2.1 Relative Luminance & Contrast Ratio calculation script

function hexToRgb(hex) {
  let c = hex.replace('#', '');
  if (c.length === 3) {
    c = c.split('').map(x => x + x).join('');
  }
  const num = parseInt(c, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

function srgbToLinear(c) {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

function getLuminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  return (
    0.2126 * srgbToLinear(r) +
    0.7152 * srgbToLinear(g) +
    0.0722 * srgbToLinear(b)
  );
}

function getContrastRatio(fgHex, bgHex) {
  const l1 = getLuminance(fgHex);
  const l2 = getLuminance(bgHex);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

const pairs = [
  // --- REAL GOOGLE BRAND COLOR HIGHLIGHTS (Dark ink text on real Google fills) ---
  {
    category: 'Real Google Fill',
    element: '"Build" (Dark ink on real Google Blue #4285F4)',
    fg: '#111215',
    bg: '#4285F4'
  },
  {
    category: 'Real Google Fill',
    element: '"Learn" (Dark ink on real Google Yellow #FBBC04)',
    fg: '#111215',
    bg: '#FBBC04'
  },
  {
    category: 'Real Google Fill',
    element: '"Ship" (Dark ink on real Google Green #34A853)',
    fg: '#111215',
    bg: '#34A853'
  },
  {
    category: 'Real Google Fill',
    element: '"Lead" (Dark ink on real Google Red #EA4335)',
    fg: '#0A0A0A',
    bg: '#EA4335'
  },

  // --- HOME PAGE TEXT PAIRS ---
  {
    category: 'Home Light',
    element: 'Headline h1 on Canvas (#202124 on #FAF9F5)',
    fg: '#202124',
    bg: '#FAF9F5'
  },
  {
    category: 'Home Light',
    element: 'Hero subtext on Canvas (#474B51 on #FAF9F5)',
    fg: '#474B51',
    bg: '#FAF9F5'
  },
  {
    category: 'Home Light',
    element: 'Terminal text on Surface-Muted (#202124 on #F3F2EC)',
    fg: '#202124',
    bg: '#F3F2EC'
  },
  {
    category: 'Home Light',
    element: 'Terminal secondary on Surface-Muted (#474B51 on #F3F2EC)',
    fg: '#474B51',
    bg: '#F3F2EC'
  },
  {
    category: 'Home Light',
    element: 'Coming up chips text on Surface-Muted (#202124 on #F3F2EC)',
    fg: '#202124',
    bg: '#F3F2EC'
  },
  {
    category: 'Home Light',
    element: 'Three-column panel body on Surface (#474B51 on #FFFFFF)',
    fg: '#474B51',
    bg: '#FFFFFF'
  },
  {
    category: 'Home Light',
    element: 'Closing CTA paragraph on Card Surface (#474B51 on #FFFFFF)',
    fg: '#474B51',
    bg: '#FFFFFF'
  },
  {
    category: 'Home Light',
    element: 'Bento Card Title on Surface (#202124 on #FFFFFF)',
    fg: '#202124',
    bg: '#FFFFFF'
  },
  {
    category: 'Home Light',
    element: 'Bento Card Body on Surface (#474B51 on #FFFFFF)',
    fg: '#474B51',
    bg: '#FFFFFF'
  },
  {
    category: 'Home Dark',
    element: 'Headline h1 on Canvas (#F8F9FA on #111215)',
    fg: '#F8F9FA',
    bg: '#111215'
  },
  {
    category: 'Home Dark',
    element: 'Hero subtext on Canvas (#BDC1C6 on #111215)',
    fg: '#BDC1C6',
    bg: '#111215'
  },
  {
    category: 'Home Dark',
    element: 'Terminal text on Surface-Muted (#F8F9FA on #24262B)',
    fg: '#F8F9FA',
    bg: '#24262B'
  },
  {
    category: 'Home Dark',
    element: 'Terminal secondary on Surface-Muted (#BDC1C6 on #24262B)',
    fg: '#BDC1C6',
    bg: '#24262B'
  },
  {
    category: 'Home Dark',
    element: 'Coming up chips text on Surface-Muted (#F8F9FA on #24262B)',
    fg: '#F8F9FA',
    bg: '#24262B'
  },
  {
    category: 'Home Dark',
    element: 'Three-column panel body on Surface (#BDC1C6 on #181A1E)',
    fg: '#BDC1C6',
    bg: '#181A1E'
  },
  {
    category: 'Home Dark',
    element: 'Closing CTA paragraph on Card Surface (#BDC1C6 on #181A1E)',
    fg: '#BDC1C6',
    bg: '#181A1E'
  },
  {
    category: 'Home Dark',
    element: 'Bento Card Title on Surface (#F8F9FA on #181A1E)',
    fg: '#F8F9FA',
    bg: '#181A1E'
  },
  {
    category: 'Home Dark',
    element: 'Bento Card Body on Surface (#BDC1C6 on #181A1E)',
    fg: '#BDC1C6',
    bg: '#181A1E'
  }
];

console.log('='.repeat(94));
console.log('MEASURED WCAG 2.1 CONTRAST RATIOS (REAL GOOGLE FILLS & HOME ELEMENTS)');
console.log('='.repeat(94));
console.log(
  'Category'.padEnd(20) +
  'Element / Color Pair'.padEnd(48) +
  'FG / BG'.padEnd(22) +
  'Ratio'.padEnd(10) +
  'Result'
);
console.log('-'.repeat(94));

let allPass = true;
for (const p of pairs) {
  const ratio = getContrastRatio(p.fg, p.bg);
  const rounded = ratio.toFixed(2) + ':1';
  const passesAA = ratio >= 4.5;
  const passesAAA = ratio >= 7.0;
  const rating = passesAAA ? 'PASS (AAA)' : passesAA ? 'PASS (AA)' : 'FAIL';
  if (!passesAA) allPass = false;

  console.log(
    p.category.padEnd(20) +
    p.element.padEnd(48) +
    `${p.fg} / ${p.bg}`.padEnd(22) +
    rounded.padEnd(10) +
    rating
  );
}

console.log('='.repeat(94));
console.log(`ALL TESTED PAIRS COMPLIANT (>= 4.5:1 AA): ${allPass ? 'YES' : 'NO'}`);
console.log('='.repeat(94));
