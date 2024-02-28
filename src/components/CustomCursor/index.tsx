import * as React from "react";

import { useMouse } from "@uidotdev/usehooks";
import { Base } from "./UI.styled";

export default function CustomCursor() {
  const [mouse, ref] = useMouse();

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      Hover me and see where I am relative to the element:
      <br />
      x: ${mouse.x}
      y: ${mouse.y}
      <Base x={mouse.x} y={mouse.y} />
    </div>
  );
}
