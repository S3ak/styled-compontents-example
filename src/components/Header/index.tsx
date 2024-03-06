import useCart from "@hooks/useCart";
import { CiShoppingCart } from "react-icons/ci";

import * as UI from "./UI.styled";

function Header() {
  const { count, total, toggleVisibility } = useCart();

  return (
    <UI.Container>
      <section>
        <h1>E-Commerce Website</h1>
      </section>

      <section>
        <UI.Nav>
          <a href="/">Home</a>
          <button onClick={toggleVisibility}>Cart</button>
          <a href="/login">Login</a>
        </UI.Nav>
      </section>

      <section onClick={toggleVisibility}>
        <UI.CountContainer>
          <CiShoppingCart />
          <UI.Badge>{count}</UI.Badge>
        </UI.CountContainer>
        <p>
          Total: <strong>{total}</strong>
        </p>
      </section>
    </UI.Container>
  );
}

export default Header;
