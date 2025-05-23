import { defineRecipe } from "@pandacss/dev";

import {
  THEME_TYPOGRAPHY_KEYS,
  themeColorKeys,
} from "../../../styles/themeConstants";

export const typographyRecipe = defineRecipe({
  className: "typography",
  defaultVariants: {
    color: "black",
  },
  variants: {
    className: {
      // 空のオブジェクトを定義して、任意のclassNameを受け入れられるようにする
      _: {},
    },
    name: {
      [THEME_TYPOGRAPHY_KEYS.JP1L_48_Bold]: {
        fontFamily: "noto",
        fontWeight: "bold",
        fontSize: "48",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.JP1L_32_Bold]: {
        fontFamily: "noto",
        fontWeight: "bold",
        fontSize: "32",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.JP1L_24_Bold]: {
        fontFamily: "noto",
        fontWeight: "bold",
        fontSize: "24",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.JP1L_20_Bold]: {
        fontFamily: "noto",
        fontWeight: "bold",
        fontSize: "20",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.JP1L_16_Bold]: {
        fontFamily: "noto",
        fontWeight: "bold",
        fontSize: "16",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.JP1L_16_Medium]: {
        fontFamily: "noto",
        fontWeight: "medium",
        fontSize: "16",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.JP1L_16_Regular]: {
        fontFamily: "noto",
        fontWeight: "regular",
        fontSize: "16",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.JP1L_14_Bold]: {
        fontFamily: "noto",
        fontWeight: "bold",
        fontSize: "14",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.JP1L_14_Medium]: {
        fontFamily: "noto",
        fontWeight: "medium",
        fontSize: "14",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.JP1L_14_Regular]: {
        fontFamily: "noto",
        fontWeight: "regular",
        fontSize: "14",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.JP1L_14_Regular_Boarder]: {
        fontFamily: "noto",
        fontWeight: "regular",
        fontSize: "14",
        lineHeight: "small",
        textDecoration: "underline",
      },
      [THEME_TYPOGRAPHY_KEYS.JP1L_12_Bold]: {
        fontFamily: "noto",
        fontWeight: "bold",
        fontSize: "12",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.JP1L_12_Medium]: {
        fontFamily: "noto",
        fontWeight: "medium",
        fontSize: "12",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.JP1L_12_Regular]: {
        fontFamily: "noto",
        fontWeight: "regular",
        fontSize: "12",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.JP1L_10_Medium]: {
        fontFamily: "noto",
        fontWeight: "medium",
        fontSize: "10",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS["JP2L_10_Regular_140%"]]: {
        fontFamily: "noto",
        fontWeight: "regular",
        fontSize: "10",
        lineHeight: "medium",
      },
      [THEME_TYPOGRAPHY_KEYS["JP2L_48_Bold_155%"]]: {
        fontFamily: "noto",
        fontWeight: "bold",
        fontSize: "48",
        lineHeight: "large",
      },
      [THEME_TYPOGRAPHY_KEYS["JP2L_32_Bold_155%"]]: {
        fontFamily: "noto",
        fontWeight: "bold",
        fontSize: "32",
        lineHeight: "large",
      },
      [THEME_TYPOGRAPHY_KEYS["JP2L_24_Bold_140%"]]: {
        fontFamily: "noto",
        fontWeight: "bold",
        fontSize: "24",
        lineHeight: "medium",
      },
      [THEME_TYPOGRAPHY_KEYS["JP2L_20_Bold_155%"]]: {
        fontFamily: "noto",
        fontWeight: "bold",
        fontSize: "20",
        lineHeight: "large",
      },
      [THEME_TYPOGRAPHY_KEYS["JP2L_16_Bold_155%"]]: {
        fontFamily: "noto",
        fontWeight: "bold",
        fontSize: "16",
        lineHeight: "large",
      },
      [THEME_TYPOGRAPHY_KEYS["JP2L_16_Bold_140%"]]: {
        fontFamily: "noto",
        fontWeight: "bold",
        fontSize: "16",
        lineHeight: "medium",
      },
      [THEME_TYPOGRAPHY_KEYS["JP2L_16_Medium_155%"]]: {
        fontFamily: "noto",
        fontWeight: "medium",
        fontSize: "16",
        lineHeight: "large",
      },
      [THEME_TYPOGRAPHY_KEYS["JP2L_16_Regular_155%"]]: {
        fontFamily: "noto",
        fontWeight: "regular",
        fontSize: "16",
        lineHeight: "large",
      },
      [THEME_TYPOGRAPHY_KEYS["JP2L_14_Bold_140%"]]: {
        fontFamily: "noto",
        fontWeight: "bold",
        fontSize: "14",
        lineHeight: "medium",
      },
      [THEME_TYPOGRAPHY_KEYS["JP2L_14_Medium_140%"]]: {
        fontFamily: "noto",
        fontWeight: "medium",
        fontSize: "14",
        lineHeight: "medium",
      },
      [THEME_TYPOGRAPHY_KEYS["JP2L_14_Regular_140%"]]: {
        fontFamily: "noto",
        fontWeight: "regular",
        fontSize: "14",
        lineHeight: "medium",
      },
      [THEME_TYPOGRAPHY_KEYS["JP2L_12_Bold_140%"]]: {
        fontFamily: "noto",
        fontWeight: "bold",
        fontSize: "12",
        lineHeight: "medium",
      },
      [THEME_TYPOGRAPHY_KEYS["JP2L_12_Medium_140%"]]: {
        fontFamily: "noto",
        fontWeight: "medium",
        fontSize: "12",
        lineHeight: "medium",
      },
      [THEME_TYPOGRAPHY_KEYS["JP2L_12_Regular_140%"]]: {
        fontFamily: "noto",
        fontWeight: "regular",
        fontSize: "12",
        lineHeight: "medium",
      },
      [THEME_TYPOGRAPHY_KEYS.EN_56_Bold]: {
        fontFamily: "mont",
        fontWeight: "bold",
        fontSize: "56",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.EN_56_SemiBold]: {
        fontFamily: "mont",
        fontWeight: "semiBold",
        fontSize: "56",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.EN_40_Bold]: {
        fontFamily: "mont",
        fontWeight: "bold",
        fontSize: "40",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.EN_40_SemiBold]: {
        fontFamily: "mont",
        fontWeight: "semiBold",
        fontSize: "40",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.EN_32_Bold]: {
        fontFamily: "mont",
        fontWeight: "bold",
        fontSize: "32",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.EN_32_SemiBold]: {
        fontFamily: "mont",
        fontWeight: "semiBold",
        fontSize: "32",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.EN_24_Bold]: {
        fontFamily: "mont",
        fontWeight: "bold",
        fontSize: "24",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.EN_20_Bold]: {
        fontFamily: "mont",
        fontWeight: "bold",
        fontSize: "20",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.EN_20_SemiBold]: {
        fontFamily: "mont",
        fontWeight: "semiBold",
        fontSize: "20",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.EN_12_SemiBold]: {
        fontFamily: "mont",
        fontWeight: "semiBold",
        fontSize: "12",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS.EN_16_Bold]: {
        fontFamily: "mont",
        fontWeight: "bold",
        fontSize: "16",
        lineHeight: "small",
      },
      [THEME_TYPOGRAPHY_KEYS["EN2L_16_Bold_155%"]]: {
        fontFamily: "mont",
        fontWeight: "Bold",
        fontSize: "16",
        lineHeight: "large",
      },
      [THEME_TYPOGRAPHY_KEYS["EN2L_12_Bold_140%"]]: {
        fontFamily: "mont",
        fontWeight: "Bold",
        fontSize: "12",
        lineHeight: "medium",
      },
    },
    color: {
      ...themeColorKeys.reduce(
        (acc, colorKey) => {
          acc[colorKey] = { color: colorKey };
          return acc;
        },
        {} as Record<(typeof themeColorKeys)[number], { color: string }>,
      ),
      inherit: { color: "inherit" },
    },
  },
});