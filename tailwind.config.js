/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        popup: {
          '0%': {
            opacity: 0,
            visibility: 'hidden',
            pointerEvents: 'none',
          },
          '100%': {
            opacity: 1,
            visibility: 'visible',
            pointerEvents: 'all',
          },
        },
        scaleUp: {
          '0%': {
            transform: 'scale(0.9)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        slideInOut: {
          '0%, 45%, 100%': {
            transform: 'translateX(calc(-100% - 40px))',
            opacity: 0,
            visibility: 'hidden',
          },
          '50%, 95%': {
            transform: 'translateX(0)',
            opacity: 1,
            visibility: 'visible',
          },
        },
        slideInFromRight: {
          '0%': {
            transform: 'translateX(calc(100% - 40px))',
            opacity: 0,
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
            visibility: 'visible',
          },
        },



      },
      animation: {
        popup: 'popup 1s ease-in-out 5s forwards',
        scaleUp: 'scaleUp 0.5s ease-in-out 5s forwards',
        slideInOut: 'slideInOut 10s ease-in-out infinite',
        slideInFromRight: 'slideInFromRight 0.2s ease-in-out ',

      },
      width: {
        custom: 'calc(100% - 85px)',
      },
      margin: {
        auto: 'auto',
      },
      
      transitionDuration: {
        '200': '0.2s',
      },
      transitionTimingFunction: {
        'ease': 'ease',
      },
      fontFamily: {
        inherit: 'inherit',
      },
      transitionDuration: {
        '0': '0s',
        '05': '0.5s',
      },
      transitionTimingFunction: {
        'ease': 'ease',
      },
      backgroundColor: {
        'custom': 'hsla(0, 0%, 0%, 0.6)',
        'y2k': 'hsla(0, 0%, 0%, 0.8)',
        'suave': 'hsla(0, 0%, 0%, 0.3)',

      },
      transform: {
        'translate-y': '-50%',
      },
      transitionDuration: {
        '0': '0s',
        '200': '0.2s',
      },
      transitionTimingFunction: {
        'ease': 'ease',
      },
      transitionProperty: {
        'color': 'color',
      },
      textDecoration: {
        'none': 'none',
      },
      boxShadow: {
        'custom': '0 3px 5px hsla(0, 0%, 0%, 0.1)',
      },
      strokeWidth: {
        'ionicon': '90px',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
      },
      background: {
        'none': 'none',
      },
      boxShadow: {
        'opacity-0-on-hover': '0 0 0 rgba(0, 0, 0, 0), 0 0px 0px rgba(0, 0, 0, 0)',
      },
      opacity: {
        '1-on-hover': '1',
      },
      boxShadow: {
        'custom-hover': '0 2px 4px 0 rgba(0, 0, 0, 0.10), 0 2px 10px 0 rgba(0, 0, 0, 0.08)',
      },

      boxShadow: {
        custom: '0 2px 4px 0 rgba(0, 0, 0, 0.10), 0 2px 10px 0 rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    
    // ...
  ],
};

