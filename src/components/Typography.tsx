import React from "react";
import { typographyRecipe } from "../../styled-system/recipes";
import { THEME_TYPOGRAPHY_KEYS } from "../styles/theme";

interface TypographyProps {
  name: keyof typeof THEME_TYPOGRAPHY_KEYS;
  color?: string;
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  name,
  color = "black",
  children,
  className = "",
}) => {
  const typographyClass = typographyRecipe({ name, color });
  
  return <div className={`${typographyClass} ${className}`}>{children}</div>;
};