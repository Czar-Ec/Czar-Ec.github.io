import {
  animate,
  style,
  query
} from '@angular/animations';

export const fadeIn = [
  query(':leave',
    style({
      position: 'absolute',
      left: 0,
      right: 0,
      opacity: 1,
      width: '100%',
      height: '100%',
    }),
    { optional: true }),
  query(':enter',
    style({
      position: 'absolute',
      left: 0,
      right: 0,
      opacity: 0,
      width: '100%',
      height: '100%',
    }),
    { optional: true }),
  query(':leave',
    animate('1s', style({ opacity: 0 })),
    { optional: true }),
  query(':enter',
    animate('1s', style({ opacity: 1 })),
    { optional: true })
];

