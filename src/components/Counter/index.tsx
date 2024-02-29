import { useState } from "react";
import Button from "../Button";

interface IUser {
  name?: string;
  age?: number;
}

function Counter() {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<IUser>({});
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  function onButtonClick() {
    setCount((previousCount) => previousCount + 1);
  }

  function updateUser() {
    setUser({ name: userName, age: Number(userAge) });
  }

  return (
    <div>
      <button onClick={onButtonClick}>+</button>
      <div>Count: {count}</div>
      <Button onClick={updateUser}>Update User</Button>
      <input
        name="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        name="age"
        value={userAge}
        onChange={(e) => setUserAge(e.target.value)}
      />

      <section>
        <p>
          <strong>Name</strong> {user.name}
        </p>
        <p>
          <strong>Age</strong>
          {user.age}
        </p>
      </section>
    </div>
  );
}

export default Counter;
