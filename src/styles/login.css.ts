import { style } from '@vanilla-extract/css';

export const loginForm = style({
  width: '100%',
  height: '100%',
  margin: 'auto',
  padding: '40% 10%',
  background: 'linear-gradient(275deg, rgba(8,8,8,0.8) 0%, rgba(8,8,8,0.8) 16%, rgba(8,8,8,0.7) 48%, rgba(0,0,0,0.3) 76%, rgba(191,191,191,0.05) 92%, rgba(191,191,191,0) 100%);',
  color: 'rgba(122,122,129,0.49)',

  '@media': {
    'screen and (min-width: 768px)': {
      marginLeft: '50%',
      padding: '20% 120px 0 120px',
      width: '100%',
      maxWidth: 'none',
    },
  },
});

export const loginInput = style({
  height: '50px',
});

export const loginButton = style({
  minWidth: '120px',
  marginRight: '20px',
  height: '40px',
});
