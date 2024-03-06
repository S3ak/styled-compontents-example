import useCart from "@hooks/useCart";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";

import * as UI from "./UI.styled";
// import Button from "../Button";

export default function Aside() {
  const { total, items, isVisible, toggleVisibility, resetCart } = useCart();

  console.log("Aside rendered", isVisible);

  return (
    <UI.Container isVisible={isVisible}>
      <section>
        <CiShoppingCart />
        <h2>Cart</h2>
        <button onClick={toggleVisibility}>
          <IoIosCloseCircle />
        </button>
      </section>

      <section>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.quantity} | {item.title} - {item.quantity} x {item.price}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <p>
          Total: <strong>{total}</strong>
        </p>

        <UI.ActionList>
          <button onClick={resetCart}>Clear Cart</button>
          <button>Pay</button>
        </UI.ActionList>
      </section>
    </UI.Container>
  );
}
