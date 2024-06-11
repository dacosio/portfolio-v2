import { CSSProperties, HTMLAttributes } from "react";

import { Theme } from "types/Theme";

export type Variants =
  | "titleLg"
  | "titleMd"
  | "titleSm"
  | "body"
  | "bodyMd"
  | "bodySm";

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  children: any;
  variant?: Variants;
  textColor?: keyof Theme["neutral"] | keyof Theme["brand"];
  weight?: string;
  align?: "center" | "left" | "right";
  component?: string;
  style?: CSSProperties;
  className?: string;
  bgColor?: string;
}
