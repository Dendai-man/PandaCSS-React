import { defineTokens } from "@pandacss/dev";

import { theme } from "../../styles/theme";

import type { Tokens } from "@pandacss/dev";

const genTokens = <T extends Record<string, string | number>>(obj: T) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      return [key, { value }];
    }),
  ) as { [K in keyof T]: { value: T[K] } };
};

const colorTokens = genTokens(theme.colors);
const fontSizeTokens = genTokens(theme.fontSizes);
const lineHeightTokens = genTokens(theme.lineHeights);
const fontFamilyTokens = genTokens(theme.fontFamilies);
const fontWeightTokens = genTokens(theme.fontWeights);

export const tokens: Tokens = defineTokens({
  colors: colorTokens,
  fontSizes: fontSizeTokens,
  lineHeights: lineHeightTokens,
  fonts: fontFamilyTokens,
  fontWeights: fontWeightTokens,
});