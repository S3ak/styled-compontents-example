import { createContext, useContext, useState } from "react";
import Button from "../Button";

import * as UI from "./UI.styled";

type StateType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

type Theme = "light" | "dark";

const initalState: StateType = {
  theme: "dark",
  toggleTheme: () => {},
};

const ThemeContext = createContext<StateType>(initalState);

function App() {
  const [theme, setTheme] = useState<Theme>("dark");

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: toggleTheme,
      }}
    >
      <div>
        <MyComponent />
        <MyComponentWithHooks />
      </div>
    </ThemeContext.Provider>
  );
}

function MyComponent() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div
          style={{
            backgroundColor: theme === "dark" ? "black" : "white",
            color: theme === "dark" ? "white" : "black",
          }}
        >
          The display mode is {theme}
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

// Using hooks. This is the preferred way to use context
function MyComponentWithHooks() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <UI.Container color={theme}>
      <p>Using hoook the value is: {theme}</p>
      <Button onClick={toggleTheme} />
    </UI.Container>
  );
}

export default App;
