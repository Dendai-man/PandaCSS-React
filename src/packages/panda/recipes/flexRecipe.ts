import { defineRecipe } from "@pandacss/dev";

export const flexRecipe = defineRecipe({
  className: "flex",
  base: {
    display: "flex",
  },
  variants: {
    className: {
      // 空のオブジェクトを定義して、任意のclassNameを受け入れられるようにする
      _: {},
    },
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
      rowReverse: {
        flexDirection: "row-reverse",
      },
      columnReverse: {
        flexDirection: "column-reverse",
      },
    },
    align: {
      start: {
        alignItems: "flex-start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
      stretch: {
        alignItems: "stretch",
      },
      baseline: {
        alignItems: "baseline",
      },
    },
    justify: {
      start: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
      around: {
        justifyContent: "space-around",
      },
      evenly: {
        justifyContent: "space-evenly",
      },
    },
    wrap: {
      noWrap: {
        flexWrap: "nowrap",
      },
      wrap: {
        flexWrap: "wrap",
      },
      wrapReverse: {
        flexWrap: "wrap-reverse",
      },
    },
    gap: {
      0: {
        gap: "0",
      },
      1: {
        gap: "0.25rem",
      },
      2: {
        gap: "0.5rem",
      },
      4: {
        gap: "1rem",
      },
      6: {
        gap: "1.5rem",
      },
      8: {
        gap: "2rem",
      },
      12: {
        gap: "3rem",
      },
      16: {
        gap: "4rem",
      },
    },
  },
  defaultVariants: {
    direction: "row",
    align: "start",
    justify: "start",
    wrap: "noWrap",
    gap: 0,
  },
});