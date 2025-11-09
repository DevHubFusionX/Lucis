// Theme configuration for LUCIS - Ocean Blue & Coral Palette
export const theme = {
  colors: {
    // Primary theme colors - Ocean Blue & Coral
    primary: {
      ocean: '#0A4D68',      // Deep Ocean Blue - Primary brand color
      turquoise: '#088395',  // Turquoise - Secondary
      coral: '#FF6B6B',      // Coral - Accent/CTA
      light: '#F0F4F8',      // Light Blue Gray - Backgrounds
      dark: '#1A1A1A',       // Dark text
    },
    
    // Base colors
    bg: {
      primary: '#FFFFFF',    // White sections
      secondary: '#DFE8E6',  // Sea Mist sections
      surface: '#F8F9FA',    // Light surface
    },
    
    // Text colors
    text: {
      primary: '#1A1A1A',     // Dark text on light backgrounds
      secondary: '#4A5568',   // Medium gray text
      onCopper: '#FFFFFF',    // White text on copper
      muted: '#718096',       // Muted text
    },
    
    // Brand colors - Ocean Blue primary
    ocean: {
      50: '#E8F4F8',
      100: '#D1E9F1',
      200: '#A3D3E3',
      300: '#75BDD5',
      400: '#47A7C7',
      500: '#0A4D68',
      600: '#083D53',
      700: '#062E3E',
      800: '#041E29',
      900: '#020F14',
      DEFAULT: '#0A4D68',
      hover: '#083D53',
      light: '#47A7C7',
    },
    
    // Turquoise variations
    turquoise: {
      50: '#E8F8FA',
      100: '#D1F1F5',
      200: '#A3E3EB',
      300: '#75D5E1',
      400: '#47C7D7',
      500: '#088395',
      600: '#066977',
      700: '#054F59',
      800: '#03343B',
      900: '#021A1E',
      DEFAULT: '#088395',
      hover: '#066977',
      light: '#47C7D7',
    },
    
    // Coral accent
    coral: {
      50: '#FFF0F0',
      100: '#FFE1E1',
      200: '#FFC3C3',
      300: '#FFA5A5',
      400: '#FF8787',
      500: '#FF6B6B',
      600: '#FF4D4D',
      700: '#E63939',
      800: '#B82E2E',
      900: '#8A2323',
      DEFAULT: '#FF6B6B',
      hover: '#FF4D4D',
      light: '#FF8787',
    },
    
    // Light Blue Gray variations
    lightBlue: {
      50: '#F8FAFB',
      100: '#F0F4F8',
      200: '#E1E9F0',
      300: '#D2DEE8',
      400: '#C3D3E0',
      500: '#B4C8D8',
      600: '#8FA3B3',
      700: '#6A7E8E',
      800: '#455969',
      900: '#203444',
      DEFAULT: '#F0F4F8',
      dark: '#C3D3E0',
    },
    
    // Backward compatibility aliases
    copper: {
      50: '#E8F4F8',
      100: '#D1E9F1',
      200: '#A3D3E3',
      300: '#75BDD5',
      400: '#47A7C7',
      500: '#0A4D68',
      600: '#083D53',
      700: '#062E3E',
      800: '#041E29',
      900: '#020F14',
      DEFAULT: '#0A4D68',
      hover: '#083D53',
      light: '#47A7C7',
    },
    seaMist: {
      50: '#F8FAFB',
      100: '#F0F4F8',
      200: '#E1E9F0',
      300: '#D2DEE8',
      400: '#C3D3E0',
      500: '#B4C8D8',
      600: '#8FA3B3',
      700: '#6A7E8E',
      800: '#455969',
      900: '#203444',
      DEFAULT: '#F0F4F8',
      dark: '#C3D3E0',
    },
    
    // Neutral grays
    gray: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
      DEFAULT: '#718096',
    },
    
    // Status colors
    success: {
      50: '#F0FFF4',
      500: '#38A169',
      600: '#2F855A',
    },
    
    warning: {
      50: '#FFFBEB',
      500: '#ED8936',
      600: '#DD6B20',
    },
    
    error: {
      50: '#FED7D7',
      500: '#E53E3E',
      600: '#C53030',
    },
    
    // Borders and dividers
    border: '#E2E8F0',
    divider: '#DFE8E6',
  },
  
  // Section backgrounds
  sections: {
    hero: 'white',
    features: 'lightBlue', // Light Blue Gray background
    testimonials: 'white', // White background  
    cta: 'ocean',          // Ocean Blue background
    footer: 'dark',
  },
  
  // Button variants
  buttons: {
    primary: 'coral',      // Coral for primary CTAs
    secondary: 'ocean',    // Ocean Blue for secondary
    ghost: 'transparent',  // Transparent with ocean text
    outline: 'border',     // Outlined buttons
  },
  
  // Spacing scale
  spacing: {
    xs: '0.5rem',   // 8px
    sm: '0.75rem',  // 12px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    '2xl': '3rem',  // 48px
    '3xl': '4rem',  // 64px
    section: '6rem', // 96px - Standard section padding
  },
  
  // Typography
  typography: {
    fontFamily: {
      sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      mono: ['var(--font-geist-mono)', 'monospace'],
    },
    
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
    },
    
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  
  // Border radius
  borderRadius: {
    sm: '0.375rem',   // 6px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    '3xl': '2rem',    // 32px
    full: '9999px',
  },
  
  // Shadows - Softer for blue/white theme
  boxShadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    card: '0 4px 16px rgba(0, 0, 0, 0.08)',
    cardHover: '0 8px 32px rgba(0, 0, 0, 0.12)',
    oceanGlow: '0 0 20px rgba(10, 77, 104, 0.3)',
    coralGlow: '0 0 20px rgba(255, 107, 107, 0.3)',
  },
  
  // Animation durations
  animation: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    entrance: '700ms',  // For section entrance animations
  },
  
  // Theme-specific utilities
  utils: {
    glassBlur: 'backdrop-blur-md bg-white/10',
    cardOnBlue: 'bg-white rounded-3xl shadow-lg',
    cardOnWhite: 'bg-white rounded-3xl shadow-md',
    textOnBlue: 'text-white',
    textOnWhite: 'text-gray-900',
  },
};