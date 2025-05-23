/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TypographyRecipeVariant {
  name: "JP1L_48_Bold" | "JP1L_32_Bold" | "JP1L_24_Bold" | "JP1L_20_Bold" | "JP1L_16_Bold" | "JP1L_16_Medium" | "JP1L_16_Regular" | "JP1L_14_Bold" | "JP1L_14_Medium" | "JP1L_14_Regular" | "JP1L_14_Regular_Boarder" | "JP1L_12_Bold" | "JP1L_12_Medium" | "JP1L_12_Regular" | "JP1L_10_Medium" | "JP2L_10_Regular_140%" | "JP2L_48_Bold_155%" | "JP2L_32_Bold_155%" | "JP2L_24_Bold_140%" | "JP2L_20_Bold_155%" | "JP2L_16_Bold_155%" | "JP2L_16_Bold_140%" | "JP2L_16_Medium_155%" | "JP2L_16_Regular_155%" | "JP2L_14_Bold_140%" | "JP2L_14_Medium_140%" | "JP2L_14_Regular_140%" | "JP2L_12_Bold_140%" | "JP2L_12_Medium_140%" | "JP2L_12_Regular_140%" | "EN_56_Bold" | "EN_56_SemiBold" | "EN_40_Bold" | "EN_40_SemiBold" | "EN_32_Bold" | "EN_32_SemiBold" | "EN_24_Bold" | "EN_20_Bold" | "EN_20_SemiBold" | "EN_12_SemiBold" | "EN_16_Bold" | "EN2L_16_Bold_155%" | "EN2L_12_Bold_140%"
/**
 * @default "black"
 */
color: "errorRed" | "vividPink" | "palePink" | "palePinkA30" | "thinPink" | "thinBlue" | "paleBlue" | "palePurple" | "purple" | "graphPurple" | "graphPurpleA40" | "graphPurpleA30" | "graphPurpleA20" | "graphPurpleA10" | "black" | "blackA80" | "paleBlack" | "gray" | "scrollbarGray" | "background" | "graphLine" | "blank" | "progressBar" | "shadowGray" | "shadowGrayA25" | "shadowGrayA35" | "white" | "tableBorder" | "transparent" | "gradient1" | "gradient2" | "inherit"
}

type TypographyRecipeVariantMap = {
  [key in keyof TypographyRecipeVariant]: Array<TypographyRecipeVariant[key]>
}

export type TypographyRecipeVariantProps = {
  [key in keyof TypographyRecipeVariant]?: ConditionalValue<TypographyRecipeVariant[key]> | undefined
}

export interface TypographyRecipeRecipe {
  __type: TypographyRecipeVariantProps
  (props?: TypographyRecipeVariantProps): string
  raw: (props?: TypographyRecipeVariantProps) => TypographyRecipeVariantProps
  variantMap: TypographyRecipeVariantMap
  variantKeys: Array<keyof TypographyRecipeVariant>
  splitVariantProps<Props extends TypographyRecipeVariantProps>(props: Props): [TypographyRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof TypographyRecipeVariantProps>>]
  getVariantProps: (props?: TypographyRecipeVariantProps) => TypographyRecipeVariantProps
}


export declare const typographyRecipe: TypographyRecipeRecipe