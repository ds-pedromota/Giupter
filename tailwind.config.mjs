/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // ─── DESIGN TOKENS OFICIAIS ───────────────────────────────
      colors: {
        bg:       '#0B0C10',
        surface:  '#0F1117',
        card:     '#131620',
        primary:  '#1B2A4E',
        gold:     '#D4AF37',
        'gold-lt':'#E8CC6A',
        cyan:     '#00F5FF',
        'off-wh': '#F0EDE8',
      },
      // ─── TIPOGRAFIA ───────────────────────────────────────────
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        headline: ['"Newsreader"', 'serif'],
        sans:    ['"Syne"', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"Space Grotesk"', 'sans-serif'],
      },
      fontSize: {
        '2xs':  ['0.625rem', { lineHeight: '1' }],
        'display-2xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-xl':  ['clamp(2.2rem, 5vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg':  ['clamp(1.6rem, 3.5vw, 3rem)', { lineHeight: '1.05' }],
      },
      // ─── SPACING / LAYOUT ─────────────────────────────────────
      spacing: {
        section: '10rem',
        'section-sm': '6rem',
      },
      // ─── ANIMAÇÕES ────────────────────────────────────────────
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6', filter: 'blur(60px)' },
          '50%':      { opacity: '1',   filter: 'blur(80px)' },
        },
        'scan-line': {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      animation: {
        'fade-up':     'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'glow-pulse':  'glow-pulse 4s ease-in-out infinite',
        'scan-line':   'scan-line 8s linear infinite',
      },
      // ─── BACKGROUNDS E SOMBRAS ────────────────────────────────
      backgroundImage: {
        'noise':       "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
        'radial-glow': 'radial-gradient(ellipse at center, rgba(27,42,78,0.4) 0%, transparent 70%)',
        'hero-vignette':'radial-gradient(ellipse 80% 60% at 60% 50%, transparent 30%, rgba(11,12,16,0.85) 80%)',
      },
    },
  },
  plugins: [],
};