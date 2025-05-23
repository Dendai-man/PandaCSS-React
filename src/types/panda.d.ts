import type {
  RecipeConfigMeta,
  RecipeDefinition,
  RecipeVariantRecord,
  SystemStyleObject as SystemStyleObjectWithTypes,
} from "../../styled-system/types";

/**
 * 静的型チェックを行うための型定義
 * @reference https://github.com/chakra-ui/panda/issues/1691#issuecomment-1835778358
 */

declare module "@pandacss/dev" {
  // @ts-ignore
  export interface SystemStyleObject extends SystemStyleObjectWithTypes {}
}

type IsEmptyInterface<T> = keyof T extends never ? true : false;

interface StyledRecipeConfig {}

type DefaultRecipeConfig<T extends RecipeVariantRecord = RecipeVariantRecord> =
  RecipeDefinition<T> & RecipeConfigMeta;

type RecipeConfig<T extends RecipeVariantRecord = RecipeVariantRecord> =
  IsEmptyInterface<StyledRecipeConfig> extends true
    ? DefaultRecipeConfig<T>
    : StyledRecipeConfig;

declare module "@pandacss/dev" {
  export interface StyledRecipeConfig<
    T extends RecipeVariantRecord = RecipeVariantRecord,
  > extends RecipeConfig<T> {}
}