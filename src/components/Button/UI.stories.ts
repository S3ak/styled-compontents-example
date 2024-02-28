import Button from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  component: Button,
  title: "components/Button",
};

export const Base = {
  args: {
    children: "Click Me",
    isDisabled: false,
  },
};

export const Primary = {
  args: {
    children: "Click Me",
    varient: "primary",
    isDisabled: false,
  },
};

export const Secondary = {
  args: {
    children: "Click Me",
    varient: "secondary",
    isDisabled: false,
  },
};

export const Danger = {
  args: {
    children: "Click Me",
    varient: "danger",
    isDisabled: false,
  },
};

export const Disabled = {
  args: {
    children: "Click Me",
    isDisabled: true,
  },
};

export const Small = {
  args: {
    children: "Click Me",
    isDisabled: false,
    size: "small",
  },
};

export const Medium = {
  args: {
    children: "Click Me",
    isDisabled: false,
    size: "medium",
  },
};

export const Large = {
  args: {
    children: "Click Me",
    isDisabled: false,
    size: "large",
  },
};
