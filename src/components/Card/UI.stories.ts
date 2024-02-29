import Card from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  component: Card,
  title: "components/Card",
};

export const Base = {
  args: {
    children: "Compose all the things",
    btnText: "Click Me",
    bodyText: "This is a paragraph of text",
  },
};
