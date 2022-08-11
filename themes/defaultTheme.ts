import { DefaultTheme, css } from 'styled-components';

const defaultTheme: DefaultTheme = {
  colors: {
    orange: '#d49f3',
    gray: '#8b9b92',
    white: '#FFFFFF',
    black: '#062225',
    darkGrey: '#616668',
    lightGrey: '#E0E0E5',
    background: '#F7F7FD',
    error: '#C50000',
    errorBackgroud: '#FFE0DF',
  },
  fonts: {
    headers: {
      desktop: {
        h1: css`
          font-family: 'Helvetica', 'Arial', sans-serif;
          font-weight: 500;
          font-size: 48px;
          line-height: 54px;
        `,
        h2: css`
          font-family: 'Helvetica', 'Arial', sans-serif;
          font-weight: 500;
          font-size: 32px;
          line-height: 42px;
        `,
        h3: css`
          font-family: 'Helvetica', 'Arial', sans-serif;
          font-weight: 500;
          font-size: 24px;
          line-height: 32px;
        `,
        h4: css`
          font-family: 'Helvetica', 'Arial', sans-serif;
          font-weight: 500;
          font-size: 20px;
          line-height: 26px;
        `,
        h5: css`
          font-family: 'Helvetica', 'Arial', sans-serif;
          font-weight: 500;
          font-size: 18px;
          line-height: 24px;
        `,
      },
      mobile: {
        h1: css`
          font-family: 'Helvetica', 'Arial', sans-serif;
          font-weight: 500;
          font-size: 11px;
          line-height: 24px;
        `,
        h2: css`
          font-family: 'Helvetica', 'Arial', sans-serif;
          font-weight: 500;
          font-size: 24px;
          line-height: 32px;
        `,
        h3: css`
          font-family: 'Helvetica', 'Arial', sans-serif;
          font-weight: 500;
          font-size: 20px;
          line-height: 26px;
        `,
        h4: css`
          font-family: 'Helvetica', 'Arial', sans-serif;
          font-weight: 500;
          font-size: 18px;
          line-height: 24px;
        `,
        h5: css`
          font-family: 'Helvetica', 'Arial', sans-serif;
          font-weight: 500;
          font-size: 15px;
          line-height: 24px;
        `,
      },
    },
    body: {
      baseRegural: css`
        font-family: 'Helvetica', 'Arial', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
      `,
      baseBold: css`
        font-family: 'Helvetica', 'Arial', sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
      `,
      smallBold: css`
        font-family: 'Helvetica', 'Arial', sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
      `,
      smallRegular: css`
       font-family: 'Helvetica', 'Arial', sans-serif;
       font-weight: 400;
       font-size: 14px;
       line-height: 20px;
     `,
      largeBold: css`
        font-family: 'Helvetica', 'Arial', sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
      `,
      largeRegular: css`
        font-family: 'Helvetica', 'Arial', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
     `,
    },
    buttons: {
      regular: css`
        font-family: 'Helvetica', 'Arial', sans-serif;
        font-weight: 500;
        font-size: 15px;
        line-height: 24px;
        text-transform: uppercase;
      `,
      large: css`
        font-family: 'Helvetica', 'Arial', sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        text-transform: uppercase;
      `,
      small: css`
        font-family: 'Helvetica', 'Arial', sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        text-transform: uppercase;
      `,
    },
  },
  shadows: {
    dropShadowDesktop: css`
      box-shadow: 0px 0px 25px rgba(48, 64, 84, 0.1);
    `,
  },
  gap: 8,
};

export default defaultTheme;
