export enum Colors {
  BLACK = '#000000',
  GRAY = '#D9D9D9',
  LIGHT_GRAY = '#E9E9E9',
  WHITE = '#FFFFFF',
  BLUE = '#00A4EF',
  YELLOW = '#F9D97D',
}

const deviceSizes = {
  mobile: 360,
  tablet: 768,
  desktop: 1200,
} as const;

export const BREAKPOINTS = {
  mobile: `${deviceSizes.mobile}px`,
  tablet: `${deviceSizes.tablet}px`,
  desktop: `${deviceSizes.desktop}px`,
} as const;

export const QUERIES = {
  mobile: `(max-width: ${deviceSizes.tablet - 1}px)`,
  tablet: `(min-width: ${BREAKPOINTS.tablet}) and (max-width: ${deviceSizes.desktop - 1}px)`,
  tabletOrDesktop: `(min-width: ${BREAKPOINTS.tablet})`,
  desktop: `(min-width: ${BREAKPOINTS.desktop})`,
} as const;
