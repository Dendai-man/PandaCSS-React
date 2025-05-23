import React from "react";
import { flexRecipe } from "../../styled-system/recipes";

interface FlexProps {
  direction?: "row" | "column" | "rowReverse" | "columnReverse";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: "noWrap" | "wrap" | "wrapReverse";
  gap?: 0 | 1 | 2 | 4 | 6 | 8 | 12 | 16;
  children: React.ReactNode;
  className?: string;
}

export const Flex: React.FC<FlexProps> = ({
  direction = "row",
  align = "start",
  justify = "start",
  wrap = "noWrap",
  gap = 0,
  children,
  className = "",
}) => {
  const flexClass = flexRecipe({ direction, align, justify, wrap, gap });
  
  return <div className={`${flexClass} ${className}`}>{children}</div>;
};