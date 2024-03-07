# Ecommerce Example | React + TypeScript + Vite + Styled Components + Storybook

This is a exmaple of a ecommerce site using static data. This project demostrates using styled-components in storybook with Typescript. State is amanaged with vanilla react reducer and Context API.

## Resources

[Deploy dashboard](https://vercel.com/seak/styled-compontents-example)
[Production Deploy](https://styled-compontents-example.vercel.app/)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Tasks

Create a button component.

The button compnoent should have the following states:

Default (Base)
Primary
Secondary
Hover
Disabled
Active
Small
Medium
Large
With Icon.
