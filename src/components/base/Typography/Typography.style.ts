import styled from "@emotion/styled";

import { pxToRem } from "../../../utils/Theme";

import { Variants, TypographyProps } from "./Typography.props";

const styles: Record<Variants, string> = {
  titleLg: `
      font-size: ${pxToRem(49)};
      line-height: 58.8px;
      letter-spacing: 0;
    `,
  titleMd: `
      font-size: ${pxToRem(39)};
      line-height: 46.8px;
      letter-spacing: 0;
    `,
  titleSm: `
      font-size: ${pxToRem(20)};
      line-height: 1.33em;
      font-family: "Courier New", monspace;
    `,
  body: `
      font-size: ${pxToRem(16)};
      line-height: 21px;
      letter-spacing: 0;
    `,
  bodyMd: `
      font-size: ${pxToRem(16)};
      line-height: 21px;
      letter-spacing: 0;
    `,
  bodySm: `
      font-size: ${pxToRem(13)};
      line-height: 15.6px;
      letter-spacing: 0;
      `,
};

const weights: Record<string, string> = {
  Regular: "400",
  Medium: "500",
  Bold: "700",
};

export const P = styled.p<TypographyProps>`
  ${({ variant }) => styles[variant || "body"]};
  font-weight: ${({ weight = 500 }) => weight};
  color: ${({ theme, textColor = "neutral5" }) => {
    const selectedColor = {
      ...theme.neutral,
      ...theme.brand,
    }[textColor]; //the color may not work on storybook since it does not run in runtime
    return selectedColor;
  }};
  text-align: ${({ align }) => align || "left"};
  margin: 0;
`;
