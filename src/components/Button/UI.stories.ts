import Button from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  component: Button,
  title: "components/Button",
};

export const Base = {
  args: {
    children: "Click Me",
  },
};

export const Primary = {
  args: {
    children: "Click Me",
    varient: "primary",
  },
};

export const Secondary = {
  args: {
    children: "Click Me",
    varient: "secondary",
  },
};

export const Disabled = {
  args: {
    children: "Click Me",
  },
};

export const Small = {
  args: {
    children: "Click Me",
  },
};

export const Medium = {
  args: {
    children: "Click Me",
  },
};

export const Large = {
  args: {
    children: "Click Me",
  },
};
