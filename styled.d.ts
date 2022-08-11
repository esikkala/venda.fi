import 'styled-components';
import {} from 'styled-components/cssprop'; // https://styled-components.com/docs/api#usage-with-typescript

// By default the interface DefaultTheme is empty so that's why we need to extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      orange: string,
      gray: string,
      white: string,
      black: string,
      darkGrey: string,
      lightGrey: string,
      background: string,
      error: string,
      errorBackgroud: string,
    }
    fonts: {
      headers: {
        desktop: {
          h1: TaggedTemplateLiteral,
          h2: TaggedTemplateLiteral,
          h3: TaggedTemplateLiteral,
          h4: TaggedTemplateLiteral,
          h5: TaggedTemplateLiteral,
        },
        mobile: {
          h1: TaggedTemplateLiteral,
          h2: TaggedTemplateLiteral,
          h3: TaggedTemplateLiteral,
          h4: TaggedTemplateLiteral,
          h5: TaggedTemplateLiteral,
        }
      }
      body: {
        baseRegural: TaggedTemplateLiteral,
        baseBold: TaggedTemplateLiteral,
        smallBold: TaggedTemplateLiteral,
        smallRegular:TaggedTemplateLiteral,
        largeBold: TaggedTemplateLiteral,
        largeRegular: TaggedTemplateLiteral,
      },
      buttons: {
        small: TaggedTemplateLiteral,
        regular: TaggedTemplateLiteral,
        large: TaggedTemplateLiteral,
      }
    },
    shadows: {
      dropShadowDesktop: TaggedTemplateLiteral,
    }
    gap: number
  }
}
