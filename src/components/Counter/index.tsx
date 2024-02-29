import { useState } from "react";
import Button from "../Button";

interface IUser {
  name?: string;
  age?: number;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<IUser>({});
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  function onButtonClick() {
    // NOTE: Best practice when updating state that depends on the previous state is to use a function
    setCount((previousCount) => previousCount + 1);
  }

  function updateUser() {
    setUser({ name: userName, age: Number(userAge) });
  }

  return (
    <div>
      <button onClick={onButtonClick}>+</button>

      <div>Count: {count}</div>

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <label htmlFor="username">
          Username
          <input
            name="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>

        <label htmlFor="age">
          Age
          <input
            name="age"
            value={userAge}
            onChange={(e) => setUserAge(e.target.value)}
          />
        </label>

        <Button onClick={updateUser}>Update User</Button>
      </section>

      <section>
        <p>
          <small>Name:</small>
          <strong>{user.name}</strong>
        </p>
        <p>
          <small>Age:</small>
          <strong>{user.age}</strong>
        </p>
      </section>
    </div>
  );
}

export default Counter;
