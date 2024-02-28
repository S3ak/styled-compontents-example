import React from "react";

import * as UI from "./UI.styled";

export interface IBtnProps {
  varient?: "primary" | "secondary" | "danger";
  children?: React.ReactNode;
  isDisabled?: boolean;
  size?: "small" | "medium" | "large";
}

export default function Button({
  varient,
  isDisabled,
  size,
  children,
}: IBtnProps) {
  if (varient === "secondary") {
    return (
      <UI.Secondary size={size} disabled={isDisabled}>
        {children}
      </UI.Secondary>
    );
  }

  if (varient === "danger") {
    return (
      <UI.Danger size={size} disabled={isDisabled}>
        {children}
      </UI.Danger>
    );
  }

  return (
    <UI.Primary size={size} disabled={isDisabled}>
      {children}
    </UI.Primary>
  );
}
