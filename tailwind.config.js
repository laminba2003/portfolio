module.exports = {
  darkMode: false,
  purge: {
    preserveHtmlElements: false,
    content: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}']
  },
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      recursive: ['Recursive', 'sans-serif'],
      crimson: ['"Crimson Pro"', 'serif']
    },
    spacing: {
      px: '1px',
      0: '0px',
      0.5: 'calc(0.125rem * var(--vr-baseline))',
      1: 'calc(0.25rem * var(--vr-baseline))',
      1.5: 'calc(0.375rem * var(--vr-baseline))',
      2: 'calc(0.5rem * var(--vr-baseline))',
      2.5: 'calc(0.625rem * var(--vr-baseline))',
      3: 'calc(0.75rem * var(--vr-baseline))',
      3.5: 'calc(0.875rem * var(--vr-baseline))',
      4: 'calc(1rem * var(--vr-baseline))',
      5: 'calc(1.25rem * var(--vr-baseline))',
      6: 'calc(1.5rem * var(--vr-baseline))',
      7: 'calc(1.75rem * var(--vr-baseline))',
      8: 'calc(2rem * var(--vr-baseline))',
      9: 'calc(2.25rem * var(--vr-baseline))',
      10: 'calc(2.5rem * var(--vr-baseline))',
      11: 'calc(2.75rem * var(--vr-baseline))',
      12: 'calc(3rem * var(--vr-baseline))',
      14: 'calc(3.5rem * var(--vr-baseline))',
      16: 'calc(4rem * var(--vr-baseline))',
      20: 'calc(5rem * var(--vr-baseline))',
      24: 'calc(6rem * var(--vr-baseline))',
      28: 'calc(7rem * var(--vr-baseline))',
      32: 'calc(8rem * var(--vr-baseline))',
      36: 'calc(9rem * var(--vr-baseline))',
      40: 'calc(10rem * var(--vr-baseline))',
      44: 'calc(11rem * var(--vr-baseline))',
      48: 'calc(12rem * var(--vr-baseline))',
      52: 'calc(13rem * var(--vr-baseline))',
      56: 'calc(14rem * var(--vr-baseline))',
      60: 'calc(15rem * var(--vr-baseline))',
      64: 'calc(16rem * var(--vr-baseline))',
      72: 'calc(18rem * var(--vr-baseline))',
      80: 'calc(20rem * var(--vr-baseline))',
      96: 'calc(24rem * var(--vr-baseline))'
    },
    lineHeight: {
      none: '1',
      tight: 'calc(1.25 / 1.5 * var(--vr-baseline))',
      snug: 'calc(1.375 / 1.5 * var(--vr-baseline))',
      normal: 'var(--vr-baseline)',
      relaxed: 'calc(1.625 / 1.5 * var(--vr-baseline))',
      loose: 'calc(2 / 1.5 * var(--vr-baseline))',
      3: 'calc(0.75rem * var(--vr-baseline))',
      4: 'calc(1rem * var(--vr-baseline))',
      5: 'calc(1.25rem * var(--vr-baseline))',
      6: 'calc(1.5rem * var(--vr-baseline))',
      7: 'calc(1.75rem * var(--vr-baseline))',
      8: 'calc(2rem * var(--vr-baseline))',
      9: 'calc(2.25rem * var(--vr-baseline))',
      10: 'calc(2.5rem * var(--vr-baseline))'
    },
    extend: {}
  },
  plugins: []
}
