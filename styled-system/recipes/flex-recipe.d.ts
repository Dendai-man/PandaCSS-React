/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface FlexRecipeVariant {
  /**
 * @default "row"
 */
direction: "row" | "column" | "rowReverse" | "columnReverse"
/**
 * @default "start"
 */
align: "start" | "center" | "end" | "stretch" | "baseline"
/**
 * @default "start"
 */
justify: "start" | "center" | "end" | "between" | "around" | "evenly"
/**
 * @default "noWrap"
 */
wrap: "noWrap" | "wrap" | "wrapReverse"
/**
 * @default 0
 */
gap: "0" | "1" | "2" | "4" | "6" | "8" | "12" | "16"
}

type FlexRecipeVariantMap = {
  [key in keyof FlexRecipeVariant]: Array<FlexRecipeVariant[key]>
}

export type FlexRecipeVariantProps = {
  [key in keyof FlexRecipeVariant]?: ConditionalValue<FlexRecipeVariant[key]> | undefined
}

export interface FlexRecipeRecipe {
  __type: FlexRecipeVariantProps
  (props?: FlexRecipeVariantProps): string
  raw: (props?: FlexRecipeVariantProps) => FlexRecipeVariantProps
  variantMap: FlexRecipeVariantMap
  variantKeys: Array<keyof FlexRecipeVariant>
  splitVariantProps<Props extends FlexRecipeVariantProps>(props: Props): [FlexRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof FlexRecipeVariantProps>>]
  getVariantProps: (props?: FlexRecipeVariantProps) => FlexRecipeVariantProps
}


export declare const flexRecipe: FlexRecipeRecipe