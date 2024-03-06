import { useEffect, useReducer, useState } from "react";

import Button from "../Button";
import * as UI from "./UI.styled";
import Toast from "../Toast";

type ACTIONTYPE = { type: "attack" } | { type: "reset" };

const initialState = { enemyHitPoints: 100 };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  let newHealth: number;
  let isCriticalHit: boolean;

  switch (action.type) {
    // Adding a product
    case "attack":
      isCriticalHit = Math.random() < 0.5;

      if (isCriticalHit) {
        newHealth = state.enemyHitPoints - 20;
      } else {
        newHealth = state.enemyHitPoints - 10;
      }

      return { ...state, enemyHitPoints: newHealth };

    case "reset":
      return initialState;

    default:
      throw new Error();
  }
}

export default function Game() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout> | undefined;
    if (state.enemyHitPoints <= 0) {
      setIsGameOver(true);

      timerId = setTimeout(() => {
        setIsGameOver(false);
      }, 2000);
      dispatch({ type: "reset" });
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [state.enemyHitPoints]);

  return (
    <div>
      {isGameOver && <Toast>You win!</Toast>}
      <article>
        <h1>Bile Titan</h1>
        <p>
          Health: <strong>{state.enemyHitPoints}</strong>
          <UI.HealthbarContainer>
            <UI.Healthbar width={state.enemyHitPoints} />
          </UI.HealthbarContainer>
        </p>
      </article>
      <section>
        <Button varient="primary" onClick={() => dispatch({ type: "attack" })}>
          Attack
        </Button>
        <Button varient="secondary" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </Button>
      </section>
    </div>
  );
}
