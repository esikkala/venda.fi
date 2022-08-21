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
    }
  }
}
