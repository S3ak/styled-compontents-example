import React from "react";

import * as UI from "./UI.styled";

interface IBtnProps {
  varient?: "primary" | "secondary";
  children?: React.ReactNode;
}

export default function Button({ varient, children }: IBtnProps) {
  if (varient === "secondary") {
    return <UI.Secondary>{children}</UI.Secondary>;
  }

  return <UI.Primary>{children}</UI.Primary>;
}
