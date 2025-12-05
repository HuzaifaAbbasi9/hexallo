export const sectionSpacing = Object.assign('lg:py-[60px] max-lg:py-[40px]', {
  Hero: 'lg:mt-10 max-lg:mt-7 lg:mb-[90px] max-lg:mb-8',
  'xs.b': 'lg:pb-[30px] max-lg:pb-6',
  lg: 'lg:py-[120px] max-lg:py-10',
  md: 'lg:py-[100px] max-lg:py-10',
  'md.t': 'lg:pt-[100px] max-lg:pt-10',
  'md.b': 'lg:pt-[100px] max-lg:pt-10',
});

export const textSize = {
  h1: {
    md: 'lg:text-[36px] mm-md-lg:text-[32px] max-md:text-[18px]',
  },
  h2: {
    xs: 'text-[28px]',
    sm: 'text-[32px]',
    md: 'lg:text-[50px] mm-md-lg:text-[42px] max-md:text-[38px]',
    lg: 'text-[40px]',
    xl: 'text-[48px]',
  },
  h3: {
    xs: 'text-[24px]',
    sm: 'lg:text-[28px] max-lg:text-[24px]',
    md: 'lg:text-[30px] max-lg:text-[25px]',
    lg: 'text-[36px]',
    xl: 'text-[40px]',
  },
  h4: {
    xs: 'text-[20px]',
    sm: 'text-[22px]',
    md: 'lg:text-[24px] max-lg:text-[21px]',
    lg: 'lg:text-[26px] max-lg:text-[23px]',
    xl: 'text-[32px]',
  },
  h5: {
    xs: 'text-[18px]',
    sm: 'text-[20px]',
    md: 'text-[22px]',
    lg: 'text-[24px]',
    xl: 'text-[28px]',
  },
  h6: {
    xs: 'lg:text-[10px] max-lg:text-[9px]',
    sm: 'text-[18px]',
    md: 'text-[20px]',
    lg: 'text-[22px]',
    xl: 'text-[24px]',
  },
  p: {
    xs: 'lg:text-[12px] max-lg:text-[10px]',
    sm: 'lg:text-[14px] max-lg:text-[12px]',
    md: 'lg:text-[16px] max-lg:text-[14px]',
    lg: 'lg:text-[18px] max-lg:text-[16px]',
    xl: 'lg:text-[20px] max-lg:text-[18px]',
  },
};

export const buttonVariants = {
  primary:
    'bg-secondary-100 text-primary-100 hover:bg-accent-100 border-2 border-secondary-100 hover:text-secondary-100 hover:bg-transparent',
  secondary:
    'bg-dark-500 text-accent-50 hover:bg-transparent hover:text-accent-100 border-2 border-dark-500',
  outline:
    'border-2 border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-accent-100',
  tertiary:
    'border-2 border-secondary-200 bg-accent-100 text-secondary-200 hover:bg-secondary-200 hover:text-accent-100',
  info: 'border-2 border-secondary-200 bg-secondary-200 text-primary-100 hover:bg-primary-100 hover:text-accent-100 hover:border-primary-100',
  ghost: 'text-primary-100',
};

export const buttonSizes = {
  xs: `px-2 py-1 ${textSize.p.xs} rounded-full`,
  sm: `lg:px-[17px] max-lg:px-3.5 lg:py-[10px] max-lg:py-2 ${textSize.p.xs} rounded-full`,
  md: `lg:px-[10.5px] max-lg:px-[10.5px] lg:py-[10.5px] max-lg:py-[9px] ${textSize.p.md} rounded-full`,
  lg: `lg:px-[23.5px] max-lg:px-[17.5px] lg:py-[13.5px] max-lg:py-[10.5px] ${textSize.p.lg} rounded-full`,
  xl: `px-6 py-3 ${textSize.p.xl} rounded-full`,
};

export const cardVariants = {
  primary:
    'bg-primary-100 hover:bg-primary-200 shadow-[0px_24px_90px_rgba(var(--dark-400),0.22)] border-2 border-accent-50',
  secondary:
    'bg-accent-50 hover:bg-primary-100 hover:border-primary-200/5 shadow-[4px_4px_26px_0px_rgba(var(--dark-100),0.1)] border border-dark-50/5',
};

export const iconButtonVariants = {
  primary:
    'bg-secondary-50 text-accent-50 hover:bg-accent-100 border-2 border-secondary-50 hover:border-dark-50 hover:bg-dark-50',
  secondary:
    'bg-accent-100 text-primary-100 hover:bg-transparent hover:text-accent-100 border-2 border-accent-100',
  outline:
    'border-2 border-secondary-100 text-secondary-100 hover:bg-secondary-100 hover:text-secondary-200',
  ghost:
    'border-2 border-accent-50 bg-accent-50 text-light-800 hover:bg-accent-50/70 hover:border-accent-50/10 hover:text-accent-100',
};

export const iconButtonSizes = {
  xs: `lg:size-[26px] max-lg:size-[24px] ${textSize.p.xs}`,
  sm: `p-1 ${textSize.p.sm}`,
  md: `lg:size-[36px] max-lg:size-[32px] ${textSize.p.md}`,
  lg: `lg:size-[50px] max-lg:size-[45px] ${textSize.p.lg}`,
  xl: `lg:size-[60px] max-lg:size-[50px] ${textSize.p.xl}`,
};

export const hoverEffect = {
  after:
    'after:absolute after:w-full after:left-0 after:top-0 after:bg-dark-50/80 after:transition-all after:duration-200 after:h-0 hover:after:h-full hover:text-accent-50',
};
