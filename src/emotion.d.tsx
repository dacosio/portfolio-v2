import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    brand: {};
    neutral: {
      neutral1: string;
    };
    pink: string;
    cream: string;
    maroon: string;
  }
}
