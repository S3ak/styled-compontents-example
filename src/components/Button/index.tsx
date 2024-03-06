import * as UI from "./UI.styled";

export interface IBtnProps {
  varient?: "primary" | "secondary" | "danger";
  children?: React.ReactNode;
  isDisabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export default function Button({
  varient,
  isDisabled,
  size,
  children,
  onClick,
}: IBtnProps) {
  if (varient === "secondary") {
    return (
      <UI.Secondary onClick={onClick} size={size} disabled={isDisabled}>
        {children}
      </UI.Secondary>
    );
  }

  if (varient === "danger") {
    return (
      <UI.Danger onClick={onClick} size={size} disabled={isDisabled}>
        {children}
      </UI.Danger>
    );
  }

  return (
    <UI.Primary onClick={onClick} size={size} disabled={isDisabled}>
      {children}
    </UI.Primary>
  );
}
