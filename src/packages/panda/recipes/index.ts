import { flexRecipe } from "./flexRecipe";
import { typographyRecipe } from "./typographyRecipe";

import type { Theme } from "@pandacss/types";

export const recipes: Theme["recipes"] = {
  flexRecipe,
  typographyRecipe,
} as const;

export { flexRecipe, typographyRecipe };