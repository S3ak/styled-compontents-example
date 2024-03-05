import Toast from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  component: Toast,
  title: "components/Toast",
};

export const Base = {
  args: {
    children: "This is a toast notification",
    btnText: "Dismiss",
    duration: 4000,
  },
};
