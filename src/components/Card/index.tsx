import React from "react";

import Dune2 from "./dune2.jpg";
import * as UI from "./UI.styled";
import Button from "../Button";

export interface ICardProps {
  children?: React.ReactNode;
  btnText?: string;
  bodyText?: string;
}

const defaultText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, illo nulla, eius repellendus velit consequatur";

export default function Card({
  children,
  btnText = "Click Me",
  bodyText = defaultText,
}: ICardProps) {
  return (
    <UI.Article>
      <UI.Section>
        <UI.Image src={Dune2} />
      </UI.Section>

      <UI.Section>
        <UI.Body>
          {bodyText}
          {children}
          <UI.Image src="/dune1.jpg" />
        </UI.Body>

        <Button varient="primary">{btnText}</Button>
      </UI.Section>
    </UI.Article>
  );
}
