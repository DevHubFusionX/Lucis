/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        bg: '#FFFFFF',
        surface: '#F8F9FA',
        
        // Text colors
        text: {
          primary: '#1A1A1A',
          secondary: '#6B7280',
          muted: '#9CA3AF',
        },
        
        // Brand colors
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE', 
          DEFAULT: '#1E90FF',
          hover: '#339CFF',
          500: '#1E90FF',
          600: '#339CFF',
          700: '#0066CC',
        },
        
        orange: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          DEFAULT: '#FF7A00',
          hover: '#FF9540',
          500: '#FF7A00',
          600: '#FF9540',
          700: '#E55A00',
        },
        
        // Status colors
        success: {
          50: '#F0FDF4',
          500: '#10B981',
          600: '#059669',
        },
        
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          600: '#D97706',
        },
        
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          600: '#DC2626',
        },
        
        // Utility
        border: '#E5E7EB',
        divider: '#F3F4F6',
      },
      
      boxShadow: {
        card: '0 4px 16px rgba(0, 0, 0, 0.1)',
        glow: '0 0 20px rgba(30, 144, 255, 0.3)',
      },
      
      borderRadius: {
        '3xl': '2rem',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};