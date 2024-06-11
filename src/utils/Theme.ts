// import { Theme } from "../types/Theme";
import { useTheme as useThemeBase } from "@emotion/react";
import { Theme } from "@emotion/react";
export const useTheme = (): Theme => useThemeBase();

const rootFontSizePx = 16;
export const pxToRem = (n: number): string => `${n / rootFontSizePx}rem`;

export const theme: Theme = {
  brand: {},
  neutral: {
    neutral1: "#0d0d0d",
  },
  pink: "#F26671",
  cream: "#D99982",
  maroon: "#730202",
};

export default theme;
