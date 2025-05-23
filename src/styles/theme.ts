import {
  THEME_COLOR_KEYS,
  THEME_FONT_FAMILY_KEYS,
  THEME_FONT_WEIGHT_KEYS,
  THEME_LINE_HEIGHT_KEYS,
} from "./themeConstants";

const {
  errorRed,
  vividPink,
  palePink,
  palePinkA30,
  thinPink,
  thinBlue,
  paleBlue,
  palePurple,
  purple,
  graphPurple,
  graphPurpleA40,
  graphPurpleA30,
  graphPurpleA20,
  graphPurpleA10,
  black,
  blackA80,
  paleBlack,
  gray,
  scrollbarGray,
  background,
  graphLine,
  blank,
  progressBar,
  shadowGray,
  shadowGrayA25,
  shadowGrayA35,
  white,
  tableBorder,
  transparent,
  gradient1,
  gradient2,
} = THEME_COLOR_KEYS;

const { mont, noto } = THEME_FONT_FAMILY_KEYS;

export const theme = {
  colors: {
    [errorRed]: "#FF5B5B",
    [vividPink]: "#FF519A",
    [palePink]: "#FFACC5",
    [palePinkA30]: "#FFACC555",
    [thinBlue]: "#F2FBFF",
    [thinPink]: "#FFF7FA",
    [paleBlue]: "#6ED4FF",
    [palePurple]: "#F8F5FE",
    [purple]: "#9B7DF2",
    [graphPurple]: "#B99BF6",
    [graphPurpleA40]: "#B99BF666",
    [graphPurpleA30]: "#B99BF655",
    [graphPurpleA20]: "#B99BF644",
    [graphPurpleA10]: "#B99BF633",
    [black]: "#2C3E50",
    [blackA80]: "#2C3E50CC",
    [paleBlack]: "#707070",
    [gray]: "#AAAAAA",
    [scrollbarGray]: "#D9D9D9",
    [background]: "#FAFAFA",
    [graphLine]: "#EEEEEE",
    [blank]: "#F5F5F5",
    [progressBar]: "#979797",
    [shadowGray]: "#A7AAAD",
    [shadowGrayA25]: "#A7AAAD40",
    [shadowGrayA35]: "#A7AAAD59",
    [white]: "#FFFFFF",
    [tableBorder]: "#D5DEE3",
    [transparent]: "transparent",
    /**
     * TBD
     * グラデーションのみ例外的にデザインシステムを踏襲せず、ナンバリングで管理している
     * 角度や配合度合いのパターン化が難しい為
     */
    [gradient1]:
      "linear-gradient(253.23deg, #52D5FF -3.38%, #AF8DDF 44.9%, #FF4EC3 101.65%)",
    [gradient2]:
      "linear-gradient(270deg, #52D5FF 1.3%, #AF8DDF 47.19%, #FF4EC3 101.14%)",
  },
  lineHeights: {
    [THEME_LINE_HEIGHT_KEYS.small]: "1",
    [THEME_LINE_HEIGHT_KEYS.medium]: "1.4",
    [THEME_LINE_HEIGHT_KEYS.large]: "1.55",
  },
  fontSizes: {
    "10": "10px",
    "12": "12px",
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "24": "24px",
    "32": "32px",
    "40": "48px",
    "48": "48px",
    "56": "56px",
  },
  fontFamilies: {
    [mont]: "Montserrat",
    [noto]: "Noto Sans JP",
  },
  fontWeights: {
    [THEME_FONT_WEIGHT_KEYS.regular]: 400,
    [THEME_FONT_WEIGHT_KEYS.medium]: 500,
    [THEME_FONT_WEIGHT_KEYS.semiBold]: 600,
    [THEME_FONT_WEIGHT_KEYS.bold]: 700,
  },
} as const;

export { THEME_TYPOGRAPHY_KEYS, themeColorKeys } from "./themeConstants";