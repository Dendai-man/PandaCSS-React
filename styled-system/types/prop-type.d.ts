/* eslint-disable */
import type { ConditionalValue } from './conditions';
import type { CssProperties } from './system-types';
import type { Tokens } from '../tokens/index';

export interface UtilityValues {
	color: Tokens["colors"];
	backgroundColor: Tokens["colors"];
	fontSize: Tokens["fontSizes"];
	fontWeight: Tokens["fontWeights"];
	lineHeight: Tokens["lineHeights"];
	fontFamily: Tokens["fonts"];
	borderColor: Tokens["colors"];
	backgroundImage: Tokens["colors"];
	fill: Tokens["colors"];
	stroke: Tokens["colors"];
	colorPalette: "errorRed" | "vividPink" | "palePink" | "palePinkA30" | "thinBlue" | "thinPink" | "paleBlue" | "palePurple" | "purple" | "graphPurple" | "graphPurpleA40" | "graphPurpleA30" | "graphPurpleA20" | "graphPurpleA10" | "black" | "blackA80" | "paleBlack" | "gray" | "scrollbarGray" | "background" | "graphLine" | "blank" | "progressBar" | "shadowGray" | "shadowGrayA25" | "shadowGrayA35" | "white" | "tableBorder" | "transparent" | "gradient1" | "gradient2";
}



type WithColorOpacityModifier<T> = [T] extends [string] ? `${T}/${string}` & { __colorOpacityModifier?: true } : never

type ImportantMark = "!" | "!important"
type WhitespaceImportant = ` ${ImportantMark}`
type Important = ImportantMark | WhitespaceImportant
type WithImportant<T> = [T] extends [string] ? `${T}${Important}` & { __important?: true } : never

/**
 * Only relevant when using `strictTokens` or `strictPropertyValues` in your config.
 * - Allows you to use an escape hatch (e.g. `[123px]`) to use any string as a value.
 * - Allows you to use a color opacity modifier (e.g. `red/300`) with known color values.
 * - Allows you to use an important mark (e.g. `!` or `!important`) in the value.
 *
 * This is useful when you want to use a value that is not defined in the config or want to opt-out of the defaults.
 *
 * @example
 * css({
 *   fontSize: '[123px]', // ⚠️ will not throw even if you haven't defined 123px as a token
 * })
 *
 * @see https://panda-css.com/docs/concepts/writing-styles#stricttokens
 * @see https://panda-css.com/docs/concepts/writing-styles#strictpropertyvalues
 */
export type WithEscapeHatch<T> = T | `[${string}]` | WithColorOpacityModifier<T> | WithImportant<T>

/**
 * Will restrict the value of properties that have predefined values to those values only.
 *
 * @example
 * css({
 *   display: 'abc', // ❌ will throw
 * })
 *
 * @see https://panda-css.com/docs/concepts/writing-styles#strictpropertyvalues
 */
export type OnlyKnown<Key, Value> = Value extends boolean
  ? Value
  : Value extends `${infer _}` ? Value : never