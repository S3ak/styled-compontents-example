import Counter from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  component: Counter,
  title: "components/Counter",
};

export const Base = {
  args: {
    children: "Compose all the things",
  },
};
