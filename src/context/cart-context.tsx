import { createContext, useReducer } from "react";

import { Product, ACTIONTYPE, CartState } from "@/types/products";

const initialState: CartState = {
  cart: [] as Product[],
  total: 0,
  isVisible: false,
};

export const CartContext = createContext(initialState);
export const CartDispatchContext =
  createContext<React.Dispatch<ACTIONTYPE> | null>(null);

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

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
      return { ...state, cart: [], total: 0 };

    case "toggleVisibility":
      return { ...state, isVisible: !state.isVisible };

    default:
      throw new Error();
  }
}
