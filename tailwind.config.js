/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        solar: {
          emerald: '#087F5B',        // Primary Emerald
          emeraldDark: '#06694b',
          emeraldLight: '#099268',
          forest: '#173D2B',         // Forest Green
          deepForest: '#0C261D',     // Deep Forest
          darkGreen: '#12382A',      // Dark Green
          sage: '#DCE8D9',           // Natural Sage
          sageLight: '#EBF2E9',
          ivory: '#F8F7F0',          // Warm Ivory
          white: '#FFFFFF',          // Soft White
          beige: '#EEEBDD',          // Light Beige
          gold: '#C9A96A',           // Champagne Gold
          solarGold: '#E6B94F',      // Solar Gold
          darkText: '#202923',       // Dark Text
          secondaryText: '#65736A',  // Secondary Text
          lightGrey: '#F3F5F2',      // Light Grey
          borderLight: '#E5E8E2',
          borderDark: '#1E4635',
        },
        // Brand aliases matching exact requirements
        brand: {
          emerald: '#087F5B',
          forest: '#173D2B',
          deepForest: '#0C261D',
          darkGreen: '#12382A',
          sage: '#DCE8D9',
          ivory: '#F8F7F0',
          white: '#FFFFFF',
          beige: '#EEEBDD',
          gold: '#C9A96A',
          charcoal: '#202923',
          slate: '#65736A',
          borderLight: '#E5E8E2',
          borderDark: '#1E4635',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(12, 38, 29, 0.06)',
        'elevated': '0 12px 30px -4px rgba(12, 38, 29, 0.12)',
      }
    },
  },
  plugins: [],
}
