import { BREAKPOINT } from '@angular/flex-layout';

export const CUSTOM_HEIGHT_BREAKPOINTS = [
  
  {
    alias: 'xs',
    mediaQuery: 'screen and (max-width: 700px)',
    overlapping: false,
    suffix: 'Xs'
  },
  {
    alias: 'sm',
    mediaQuery: 'screen and (max-width: 1024px) and (min-width: 700px)',
    overlapping: false,
    suffix: 'Sm'
  }
];

export const CustomBreakPointsProvider = {
  multi: true,
  provide: BREAKPOINT,
  useValue: CUSTOM_HEIGHT_BREAKPOINTS
};