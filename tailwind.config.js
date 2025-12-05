const breakpoints = {
  xs: '450px',
  sm: '555px',
  md: '768px',
  lg: '1024px',
  xl: '1400px',
  '2xl': '1500px',
};

function generateScreenBreakpoints() {
  const screens = {};
  const keys = Object.keys(breakpoints);

  keys.forEach((key) => {
    screens[key] = { min: breakpoints[key] };
  });

  keys.forEach((key) => {
    const maxValue = parseInt(breakpoints[key]) - 0.02;
    screens[`max-${key}`] = { max: `${maxValue}px` };
  });

  const ranges = [
    ['xs', 'sm'],
    ['xs', 'md'],
    ['xs', 'lg'],
    ['xs', 'xl'],
    ['xs', '2xl'],
    ['sm', 'md'],
    ['sm', 'lg'],
    ['sm', 'xl'],
    ['sm', '2xl'],
    ['md', 'lg'],
    ['md', 'xl'],
    ['md', '2xl'],
    ['lg', 'xl'],
    ['lg', '2xl'],
    ['xl', '2xl'],
  ];

  ranges.forEach(([min, max]) => {
    screens[`${min}-${max}`] = {
      min: breakpoints[min],
      max: breakpoints[max],
    };
  });

  return screens;
}

const withOpacity = (cssVariable) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(--${cssVariable}), ${opacityValue})`;
    }
    return `rgb(var(--${cssVariable}))`;
  };
};

function generateColorPalette(colorName) {
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  return shades.reduce((acc, shade) => {
    acc[shade] = withOpacity(`${colorName}-${shade}`);
    return acc;
  }, {});
}

const colorPalettes = [
  'dark',
  'light',
  'primary',
  'secondary',
  'accent',
  'danger',
  'success',
  'warning',
];

const colors = colorPalettes.reduce((acc, colorName) => {
  acc[colorName] = generateColorPalette(colorName);
  return acc;
}, {});

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: generateScreenBreakpoints(),

      fontFamily: {
        body: ['var(--body-font)', 'system-ui', 'sans-serif'],
        primary: ['var(--font-primary)', 'system-ui', 'sans-serif'],
        secondary: ['var(--font-secondary)', 'system-ui', 'sans-serif'],
      },

      colors,

      // backgroundImage: {
      //   'gradient-100':
      //     'linear-gradient(175.73deg, rgba(var(--dark-700), 0) 33.72%, rgba(var(--light-600), 0.4) 80.82%)',
      //   'gradient-200':
      //     'linear-gradient(180deg, rgba(0, 0, 0, 0) 44.15%, rgba(255, 110, 131, 0.2) 95.1%)',
      // },

      backgroundImage: (theme) => ({
        'gradient-100':
          'linear-gradient(175.73deg, transparent 33.72%, rgba(var(--light-600), 0.4) 80.82%)',
        'gradient-200':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 44.15%, rgba(255, 110, 131, 0.2) 95.1%)',
      }),

      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },

      keyframes: {},

      spacing: {},

      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      fontSize: {},

      boxShadow: {},
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '0.8125rem',
        sm: '1rem',
        md: '1.25rem',
        lg: '1.5rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },

  plugins: [],

  future: {
    hoverOnlyWhenSupported: true,
  },

  experimental: {
    optimizeUniversalDefaults: true,
  },
};
