import { useReducer } from "react";

import Button from "../Button";
import * as UI from "./UI.styled";

type ACTIONTYPE = { type: "attack" } | { type: "reset" };

const initialState = { enemyHitPoints: 100 };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  let newHealth: number;

  switch (action.type) {
    // Adding a product
    case "attack":
      newHealth = state.enemyHitPoints - 10;
      return { ...state, enemyHitPoints: newHealth };

    case "reset":
      return initialState;

    default:
      throw new Error();
  }
}

function Game() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
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

export default Game;
