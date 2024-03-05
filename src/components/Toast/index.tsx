import { useEffect, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";

import * as UI from "./UI.styled";
import Button from "../Button";

export interface IToastProps {
  children?: React.ReactNode;
  btnText?: React.ReactNode;
  duration?: number;
}

const defaultText =
  "No notification message provided. Please provide a message to display.";

export default function Toast({
  children = defaultText,
  btnText = "Dismiss",
  duration = 4000,
}: IToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log("Toast has been displayed for 5 seconds");
      setIsVisible(false);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [duration]);

  if (!isVisible) return null;

  return (
    <UI.Article>
      <UI.Section>
        <FiAlertCircle />
      </UI.Section>

      <UI.Section>
        <UI.Body>{children}</UI.Body>
        <UI.Actions>
          <Button varient="primary" onClick={() => setIsVisible(false)}>
            <IoIosCloseCircle /> {btnText}
          </Button>
        </UI.Actions>
      </UI.Section>
    </UI.Article>
  );
}
