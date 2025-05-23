import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const flexRecipeFn = /* @__PURE__ */ createRecipe('flex', {
  "direction": "row",
  "align": "start",
  "justify": "start",
  "wrap": "noWrap",
  "gap": 0
}, [])

const flexRecipeVariantMap = {
  "direction": [
    "row",
    "column",
    "rowReverse",
    "columnReverse"
  ],
  "align": [
    "start",
    "center",
    "end",
    "stretch",
    "baseline"
  ],
  "justify": [
    "start",
    "center",
    "end",
    "between",
    "around",
    "evenly"
  ],
  "wrap": [
    "noWrap",
    "wrap",
    "wrapReverse"
  ],
  "gap": [
    "0",
    "1",
    "2",
    "4",
    "6",
    "8",
    "12",
    "16"
  ]
}

const flexRecipeVariantKeys = Object.keys(flexRecipeVariantMap)

export const flexRecipe = /* @__PURE__ */ Object.assign(memo(flexRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'flexRecipe',
  __getCompoundVariantCss__: flexRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: flexRecipeVariantKeys,
  variantMap: flexRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, flexRecipeVariantKeys)
  },
  getVariantProps: flexRecipeFn.getVariantProps,
})