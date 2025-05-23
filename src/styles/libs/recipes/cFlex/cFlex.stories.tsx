import { cFlex } from ".";
import { css } from "../../../../../styled-system/css";

type Story = any;

export const Row: Story = () => (
  <div className={cFlex({ direction: "row", gap: 4 })}>
    <div className={css({ bg: "purple", p: "4", color: "white", borderRadius: "md" })}>Item 1</div>
    <div className={css({ bg: "purple", p: "4", color: "white", borderRadius: "md" })}>Item 2</div>
    <div className={css({ bg: "purple", p: "4", color: "white", borderRadius: "md" })}>Item 3</div>
  </div>
);

export const Column: Story = () => (
  <div className={cFlex({ direction: "column", gap: 4 })}>
    <div className={css({ bg: "vividPink", p: "4", color: "white", borderRadius: "md" })}>Item 1</div>
    <div className={css({ bg: "vividPink", p: "4", color: "white", borderRadius: "md" })}>Item 2</div>
    <div className={css({ bg: "vividPink", p: "4", color: "white", borderRadius: "md" })}>Item 3</div>
  </div>
);

export const JustifyBetween: Story = () => (
  <div className={cFlex({ justify: "between", align: "center", className: css({ bg: "palePurple", p: "4", borderRadius: "md" }) })}>
    <div className={css({ bg: "purple", p: "4", color: "white", borderRadius: "md" })}>Item 1</div>
    <div className={css({ bg: "purple", p: "4", color: "white", borderRadius: "md" })}>Item 2</div>
    <div className={css({ bg: "purple", p: "4", color: "white", borderRadius: "md" })}>Item 3</div>
  </div>
);

export const AlignCenter: Story = () => (
  <div className={cFlex({ direction: "column", align: "center", gap: 4, className: css({ bg: "thinPink", p: "4", borderRadius: "md" }) })}>
    <div className={css({ bg: "vividPink", p: "4", color: "white", borderRadius: "md" })}>Item 1</div>
    <div className={css({ bg: "vividPink", p: "4", color: "white", borderRadius: "md" })}>Item 2</div>
    <div className={css({ bg: "vividPink", p: "4", color: "white", borderRadius: "md" })}>Item 3</div>
  </div>
);

export const Wrap: Story = () => (
  <div className={cFlex({ wrap: "wrap", gap: 4, className: css({ bg: "thinBlue", p: "4", borderRadius: "md" }) })}>
    {Array.from({ length: 10 }).map((_, i) => (
      <div key={i} className={css({ bg: "paleBlue", p: "4", color: "black", borderRadius: "md", width: "100px" })}>
        Item {i + 1}
      </div>
    ))}
  </div>
);