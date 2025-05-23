/* eslint-disable */
export type Token = "colors.errorRed" | "colors.vividPink" | "colors.palePink" | "colors.palePinkA30" | "colors.thinBlue" | "colors.thinPink" | "colors.paleBlue" | "colors.palePurple" | "colors.purple" | "colors.graphPurple" | "colors.graphPurpleA40" | "colors.graphPurpleA30" | "colors.graphPurpleA20" | "colors.graphPurpleA10" | "colors.black" | "colors.blackA80" | "colors.paleBlack" | "colors.gray" | "colors.scrollbarGray" | "colors.background" | "colors.graphLine" | "colors.blank" | "colors.progressBar" | "colors.shadowGray" | "colors.shadowGrayA25" | "colors.shadowGrayA35" | "colors.white" | "colors.tableBorder" | "colors.transparent" | "colors.gradient1" | "colors.gradient2" | "fontSizes.10" | "fontSizes.12" | "fontSizes.14" | "fontSizes.16" | "fontSizes.18" | "fontSizes.20" | "fontSizes.24" | "fontSizes.32" | "fontSizes.40" | "fontSizes.48" | "fontSizes.56" | "lineHeights.small" | "lineHeights.medium" | "lineHeights.large" | "fonts.mont" | "fonts.noto" | "fontWeights.regular" | "fontWeights.medium" | "fontWeights.semiBold" | "fontWeights.bold" | "colors.colorPalette"

export type ColorPalette = "errorRed" | "vividPink" | "palePink" | "palePinkA30" | "thinBlue" | "thinPink" | "paleBlue" | "palePurple" | "purple" | "graphPurple" | "graphPurpleA40" | "graphPurpleA30" | "graphPurpleA20" | "graphPurpleA10" | "black" | "blackA80" | "paleBlack" | "gray" | "scrollbarGray" | "background" | "graphLine" | "blank" | "progressBar" | "shadowGray" | "shadowGrayA25" | "shadowGrayA35" | "white" | "tableBorder" | "transparent" | "gradient1" | "gradient2"

export type ColorToken = "errorRed" | "vividPink" | "palePink" | "palePinkA30" | "thinBlue" | "thinPink" | "paleBlue" | "palePurple" | "purple" | "graphPurple" | "graphPurpleA40" | "graphPurpleA30" | "graphPurpleA20" | "graphPurpleA10" | "black" | "blackA80" | "paleBlack" | "gray" | "scrollbarGray" | "background" | "graphLine" | "blank" | "progressBar" | "shadowGray" | "shadowGrayA25" | "shadowGrayA35" | "white" | "tableBorder" | "transparent" | "gradient1" | "gradient2" | "colorPalette"

export type FontSizeToken = "10" | "12" | "14" | "16" | "18" | "20" | "24" | "32" | "40" | "48" | "56"

export type LineHeightToken = "small" | "medium" | "large"

export type FontToken = "mont" | "noto"

export type FontWeightToken = "regular" | "medium" | "semiBold" | "bold"

export type Tokens = {
		colors: ColorToken
		fontSizes: FontSizeToken
		lineHeights: LineHeightToken
		fonts: FontToken
		fontWeights: FontWeightToken
} & { [token: string]: never }

export type TokenCategory = "aspectRatios" | "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "cursor" | "shadows" | "spacing" | "radii" | "borders" | "borderWidths" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"