const tokens = {
  "colors.errorRed": {
    "value": "#FF5B5B",
    "variable": "var(--colors-error-red)"
  },
  "colors.vividPink": {
    "value": "#FF519A",
    "variable": "var(--colors-vivid-pink)"
  },
  "colors.palePink": {
    "value": "#FFACC5",
    "variable": "var(--colors-pale-pink)"
  },
  "colors.palePinkA30": {
    "value": "#FFACC555",
    "variable": "var(--colors-pale-pink-a30)"
  },
  "colors.thinBlue": {
    "value": "#F2FBFF",
    "variable": "var(--colors-thin-blue)"
  },
  "colors.thinPink": {
    "value": "#FFF7FA",
    "variable": "var(--colors-thin-pink)"
  },
  "colors.paleBlue": {
    "value": "#6ED4FF",
    "variable": "var(--colors-pale-blue)"
  },
  "colors.palePurple": {
    "value": "#F8F5FE",
    "variable": "var(--colors-pale-purple)"
  },
  "colors.purple": {
    "value": "#9B7DF2",
    "variable": "var(--colors-purple)"
  },
  "colors.graphPurple": {
    "value": "#B99BF6",
    "variable": "var(--colors-graph-purple)"
  },
  "colors.graphPurpleA40": {
    "value": "#B99BF666",
    "variable": "var(--colors-graph-purple-a40)"
  },
  "colors.graphPurpleA30": {
    "value": "#B99BF655",
    "variable": "var(--colors-graph-purple-a30)"
  },
  "colors.graphPurpleA20": {
    "value": "#B99BF644",
    "variable": "var(--colors-graph-purple-a20)"
  },
  "colors.graphPurpleA10": {
    "value": "#B99BF633",
    "variable": "var(--colors-graph-purple-a10)"
  },
  "colors.black": {
    "value": "#2C3E50",
    "variable": "var(--colors-black)"
  },
  "colors.blackA80": {
    "value": "#2C3E50CC",
    "variable": "var(--colors-black-a80)"
  },
  "colors.paleBlack": {
    "value": "#707070",
    "variable": "var(--colors-pale-black)"
  },
  "colors.gray": {
    "value": "#AAAAAA",
    "variable": "var(--colors-gray)"
  },
  "colors.scrollbarGray": {
    "value": "#D9D9D9",
    "variable": "var(--colors-scrollbar-gray)"
  },
  "colors.background": {
    "value": "#FAFAFA",
    "variable": "var(--colors-background)"
  },
  "colors.graphLine": {
    "value": "#EEEEEE",
    "variable": "var(--colors-graph-line)"
  },
  "colors.blank": {
    "value": "#F5F5F5",
    "variable": "var(--colors-blank)"
  },
  "colors.progressBar": {
    "value": "#979797",
    "variable": "var(--colors-progress-bar)"
  },
  "colors.shadowGray": {
    "value": "#A7AAAD",
    "variable": "var(--colors-shadow-gray)"
  },
  "colors.shadowGrayA25": {
    "value": "#A7AAAD40",
    "variable": "var(--colors-shadow-gray-a25)"
  },
  "colors.shadowGrayA35": {
    "value": "#A7AAAD59",
    "variable": "var(--colors-shadow-gray-a35)"
  },
  "colors.white": {
    "value": "#FFFFFF",
    "variable": "var(--colors-white)"
  },
  "colors.tableBorder": {
    "value": "#D5DEE3",
    "variable": "var(--colors-table-border)"
  },
  "colors.transparent": {
    "value": "transparent",
    "variable": "var(--colors-transparent)"
  },
  "colors.gradient1": {
    "value": "linear-gradient(253.23deg, #52D5FF -3.38%, #AF8DDF 44.9%, #FF4EC3 101.65%)",
    "variable": "var(--colors-gradient1)"
  },
  "colors.gradient2": {
    "value": "linear-gradient(270deg, #52D5FF 1.3%, #AF8DDF 47.19%, #FF4EC3 101.14%)",
    "variable": "var(--colors-gradient2)"
  },
  "fontSizes.10": {
    "value": "10px",
    "variable": "var(--font-sizes-10)"
  },
  "fontSizes.12": {
    "value": "12px",
    "variable": "var(--font-sizes-12)"
  },
  "fontSizes.14": {
    "value": "14px",
    "variable": "var(--font-sizes-14)"
  },
  "fontSizes.16": {
    "value": "16px",
    "variable": "var(--font-sizes-16)"
  },
  "fontSizes.18": {
    "value": "18px",
    "variable": "var(--font-sizes-18)"
  },
  "fontSizes.20": {
    "value": "20px",
    "variable": "var(--font-sizes-20)"
  },
  "fontSizes.24": {
    "value": "24px",
    "variable": "var(--font-sizes-24)"
  },
  "fontSizes.32": {
    "value": "32px",
    "variable": "var(--font-sizes-32)"
  },
  "fontSizes.40": {
    "value": "48px",
    "variable": "var(--font-sizes-40)"
  },
  "fontSizes.48": {
    "value": "48px",
    "variable": "var(--font-sizes-48)"
  },
  "fontSizes.56": {
    "value": "56px",
    "variable": "var(--font-sizes-56)"
  },
  "lineHeights.small": {
    "value": "1",
    "variable": "var(--line-heights-small)"
  },
  "lineHeights.medium": {
    "value": "1.4",
    "variable": "var(--line-heights-medium)"
  },
  "lineHeights.large": {
    "value": "1.55",
    "variable": "var(--line-heights-large)"
  },
  "fonts.mont": {
    "value": "Montserrat",
    "variable": "var(--fonts-mont)"
  },
  "fonts.noto": {
    "value": "Noto Sans JP",
    "variable": "var(--fonts-noto)"
  },
  "fontWeights.regular": {
    "value": 400,
    "variable": "var(--font-weights-regular)"
  },
  "fontWeights.medium": {
    "value": 500,
    "variable": "var(--font-weights-medium)"
  },
  "fontWeights.semiBold": {
    "value": 600,
    "variable": "var(--font-weights-semi-bold)"
  },
  "fontWeights.bold": {
    "value": 700,
    "variable": "var(--font-weights-bold)"
  },
  "colors.colorPalette": {
    "value": "var(--colors-color-palette)",
    "variable": "var(--colors-color-palette)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar