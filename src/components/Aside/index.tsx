import useCart from "@hooks/useCart";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import { FaTrash, FaPlusSquare, FaMinusSquare } from "react-icons/fa";

import * as UI from "./UI.styled";
// import Button from "../Button";

export default function Aside() {
  const {
    total,
    items,
    isVisible,
    toggleVisibility,
    resetCart,
    adjustQuantity,
    removeItemFromCart,
  } = useCart();

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
        <UI.ProductList>
          {items.map((item) => (
            <UI.ProductItem key={item.id}>
              <p>
                {item.quantity} | {item.title} - {item.quantity} x {item.price}
              </p>

              <button onClick={() => adjustQuantity(item, "increase")}>
                <FaPlusSquare />
              </button>

              <button onClick={() => adjustQuantity(item, "decrease")}>
                <FaMinusSquare />
              </button>

              <button onClick={() => removeItemFromCart(item)}>
                <FaTrash />
                Remove
              </button>
            </UI.ProductItem>
          ))}
        </UI.ProductList>
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
