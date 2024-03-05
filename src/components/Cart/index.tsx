import { useReducer } from "react";

import Button from "../Button";
import * as UI from "./UI.styled";

type Product = {
  id: number;
  title: string;
  price: number;
  discountedPrice: number;
  quantity: number;
};

type ProductWithoutQuantity = Omit<Product, "quantity">;

type ACTIONTYPE =
  | { type: "addProduct"; payload: ProductWithoutQuantity }
  | { type: "removeProduct"; payload: ProductWithoutQuantity }
  | { type: "clearCart" };

const products: Product[] = [
  {
    id: 0,
    title: "Milk",
    price: 19.99,
    discountedPrice: 19.99,
    quantity: 0,
  },
  {
    id: 1,
    title: "Bread",
    price: 12.99,
    discountedPrice: 12.99,
    quantity: 0,
  },
  {
    id: 2,
    title: "Cheese",
    price: 25.99,
    discountedPrice: 25.99,
    quantity: 0,
  },
  {
    id: 3,
    title: "Snus",
    price: 299.99,
    discountedPrice: 259.99,
    quantity: 0,
  },
];

const initialState = { cart: [] as Product[], total: 0 };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  let productIndex: number;
  let newTotal: number;
  let itemInCart: Product | undefined;
  let cart: Product[];

  switch (action.type) {
    // Adding a product
    case "addProduct":
      // Create a new cart so we don't mutate our state
      cart = [...state.cart];

      // Check if the product is already in the cart
      itemInCart = cart.find((item) => item.id === action.payload.id);

      // If the product is already in the cart we want to increase the quantity
      if (itemInCart) {
        itemInCart.quantity += 1;
        // Else we want to add the product to the cart array
      } else {
        cart = [...cart, { ...action.payload, quantity: 1 }];
      }

      // Set the new total so we don't have to keep calculating it
      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);

      return { ...state, cart: cart, total: newTotal };

    // Removing a product
    case "removeProduct":
      cart = [...state.cart];
      // Get the product index
      productIndex = cart.findIndex(
        (product) => product.id === action.payload.id
      );
      // If the product index is not -1 then it exists
      if (productIndex !== -1) {
        if (cart[productIndex].quantity > 1) {
          // Remove 1 from quantity is quantity is higher than 1
          // We do not want to mutate cart so we recreate it
          cart = [
            ...cart.slice(0, productIndex),
            {
              ...cart[productIndex],
              quantity: cart[productIndex].quantity - 1,
            },
            ...cart.slice(productIndex + 1),
          ];
        } else {
          // Remove the item entirely if quantity is going to be 0
          cart = [
            ...cart.slice(0, productIndex),
            ...cart.slice(productIndex + 1),
          ];
        }
      }
      // Set the new total so we don't have to keep calculating it
      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);

      return { ...state, cart: cart, total: newTotal };

    // Clearing a cart
    case "clearCart":
      return { cart: [], total: 0 };

    default:
      throw new Error();
  }
}

function Cart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <UI.ProductList>
        {products.map((product) => (
          <div key={product.id}>
            <Button
              onClick={() => dispatch({ type: "addProduct", payload: product })}
            >
              Add {product.title}
            </Button>
            <Button
              onClick={() =>
                dispatch({ type: "removeProduct", payload: product })
              }
            >
              Remove {product.title}
            </Button>
          </div>
        ))}
      </UI.ProductList>

      <section>
        <div>
          <hr />
          <Button onClick={() => dispatch({ type: "clearCart" })}>
            Clear cart
          </Button>
        </div>
        <p>
          Total: <strong>{state.total} KR</strong>
        </p>
        <hr />
      </section>

      <UI.List>
        <li>
          <strong>Quantity - Name - Price</strong>
        </li>

        {state.cart.map((product) => (
          <UI.ListItem key={product.id}>
            {product.quantity} - {product.title} - {product.discountedPrice}
          </UI.ListItem>
        ))}
      </UI.List>
    </div>
  );
}

export default Cart;
