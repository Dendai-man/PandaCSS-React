import { defineConfig } from "@pandacss/dev";

/**
 * Dockerで使っている為エイリアス使用不可（import元のファイルも含む）
 */
import { recipes, tokens, utilities, conditions } from "./src/packages/panda";

const pandaConfig = defineConfig({
  // デフォルトのプリセットを無効化
  // @see https://panda-css.com/docs/guides/minimal-setup
  presets: [],

  // Whether to opt-out of the defaults config presets: [@pandacss/preset-base, @pandacss/preset-panda]
  eject: true,
  
  // Panda doesn't automatically know which tokens are valid for which CSS properties,
  // so it is necessary to tell Panda that my tokens from the "colors" category are valid for the CSS property "color".
  // ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※
  // トークンを有効化したいプロパティは指定必須。指定しないとTokenが効きません
  // ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※
  utilities: utilities,

  // This allows only token values and prevents the use of custom or raw CSS values.
  strictTokens: true,

  // The extension for the emitted JavaScript files
  outExtension: "js",

  // Where to look for your css declarations
  include: ["./src/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens,
    },
    recipes,
  },

  conditions,

  // ビルド時にクラスを生成しておくことで、ランタイム時のクラス指定も効くようにする
  // @see: https://panda-css.com/docs/guides/static
  // @see: https://panda-css.com/docs/guides/dynamic-styling#using-static-css
  staticCss: {
    recipes: "*",
    css: [
      {
        properties: {
          color: ["*"],
          fontSize: ["*"],
          fontWeight: ["*"],
          lineHeight: ["*"],
          fontFamily: ["*"],
          fill: ["*"],
          stroke: ["*"],
        },
      },
    ],
  },

  // The output directory for your css system
  outdir: "styled-system",
  
  // The JSX framework to use
  jsxFramework: "react",
});

export default pandaConfig;