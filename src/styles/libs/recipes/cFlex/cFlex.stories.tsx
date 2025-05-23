import { cFlex } from ".";
import { css } from "../../../../../styled-system/css";

type Story = any;

export const Row: Story = () => (
  <div className={cFlex({ direction: "row",

   })}>
    <div className={css({ backgroundColor: "purple", padding: "4", color: "white", borderRadius: "md" })}>Item 1</div>
    <div className={css({ backgroundColor: "purple", padding: "4", color: "white", borderRadius: "md" })}>Item 2</div>
    <div className={css({ backgroundColor: "purple", padding: "4", color: "white", borderRadius: "md" })}>Item 3</div>
  </div>
);

export const Column: Story = () => (
  <div className={cFlex({ direction: "column",

   })}>
    <div className={css({ backgroundColor: "vividPink", padding: "4", color: "white", borderRadius: "md" })}>Item 1</div>
    <div className={css({ backgroundColor: "vividPink", padding: "4", color: "white", borderRadius: "md" })}>Item 2</div>
    <div className={css({ backgroundColor: "vividPink", padding: "4", color: "white", borderRadius: "md" })}>Item 3</div>
  </div>
);

export const JustifyBetween: Story = () => (
  <div className={cFlex({ justify: "between", align: "center" })}>
    <div className={css({ backgroundColor: "purple", padding: "4", color: "white", borderRadius: "md" })}>Item 1</div>
    <div className={css({ backgroundColor: "purple", padding: "4", color: "white", borderRadius: "md" })}>Item 2</div>
    <div className={css({ backgroundColor: "purple", padding: "4", color: "white", borderRadius: "md" })}>Item 3</div>
  </div>
);

export const AlignCenter: Story = () => (
  <div className={cFlex({ direction: "column", align: "center" })}>
    <div className={css({ backgroundColor: "vividPink", padding: "4", color: "white", borderRadius: "md" })}>Item 1</div>
    <div className={css({ backgroundColor: "vividPink", padding: "4", color: "white", borderRadius: "md" })}>Item 2</div>
    <div className={css({ backgroundColor: "vividPink", padding: "4", color: "white", borderRadius: "md" })}>Item 3</div>
  </div>
);

export const Wrap: Story = () => (
  <div className={cFlex({ wrap: "wrap"})}>
    {Array.from({ length: 10 }).map((_, i) => (
      <div key={i} className={css({ backgroundColor: "paleBlue", padding: "4", color: "black", borderRadius: "md", width: "100px" })}>
        Item {i + 1}
      </div>
    ))}
  </div>
);