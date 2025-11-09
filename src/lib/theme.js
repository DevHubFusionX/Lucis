// Theme configuration for LUCIS - 2025 Burnt Copper & Sea Mist Palette
export const theme = {
  colors: {
    // Primary theme colors - 2025 Palette
    primary: {
      copper: '#A0430A',     // Burnt Copper - Primary brand color
      seaMist: '#DFE8E6',    // Sea Mist - Secondary/background color
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
    
    // Brand colors - Burnt Copper primary
    copper: {
      50: '#FDF5F0',
      100: '#FAEBD7',
      200: '#F4D1B0',
      300: '#EDB688',
      400: '#D4824A',
      500: '#A0430A',
      600: '#8B3A09',
      700: '#6B2D07',
      800: '#4A1F05',
      900: '#2A1103',
      DEFAULT: '#A0430A',
      hover: '#8B3A09',
      light: '#D4824A',
    },
    
    // Sea Mist variations
    seaMist: {
      50: '#F7F9F8',
      100: '#EFF4F2',
      200: '#DFE8E6',
      300: '#CFD9D6',
      400: '#B8C7C2',
      500: '#9FB0AB',
      600: '#7A8B85',
      700: '#5A6B65',
      800: '#3D4B46',
      900: '#252E2B',
      DEFAULT: '#DFE8E6',
      dark: '#B8C7C2',
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
    features: 'seaMist',   // Sea Mist background
    testimonials: 'white', // White background  
    cta: 'copper',         // Burnt Copper background
    footer: 'dark',
  },
  
  // Button variants
  buttons: {
    primary: 'copper',     // Burnt Copper for primary CTAs
    secondary: 'seaMist',  // Sea Mist for secondary
    ghost: 'transparent',  // Transparent with copper text
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
    blueGlow: '0 0 20px rgba(30, 144, 255, 0.2)',
    orangeGlow: '0 0 20px rgba(255, 122, 0, 0.2)',
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