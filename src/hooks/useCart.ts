import { CartContext, CartDispatchContext } from "@/context/cart-context";
import { useContext, useMemo } from "react";
import { ACTIONTYPE, ProductWithQuantity } from "products";

// Custom hook to use the cart context
const useCart = () => {
  const context = useContext(CartContext);
  const dispatch = useContext<React.Dispatch<ACTIONTYPE> | null>(
    CartDispatchContext
  );

  if (context === undefined || dispatch === null) {
    throw new Error("useCart must be used within a CartProvider");
  }

  const count = useMemo(() => {
    return context.cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [context.cart]);

  const resetCart = () => {
    dispatch({ type: "clearCart" });
  };

  const addItemToCart = (payload: ProductWithQuantity) => {
    dispatch({ type: "addProduct", payload });
  };

  const removeItemFromCart = (payload: ProductWithQuantity) => {
    dispatch({ type: "removeMaxQuantity", payload });
  };

  const adjustQuantity = (
    payload: ProductWithQuantity,
    kind: "increase" | "decrease"
  ) => {
    if (kind === "increase") {
      dispatch({ type: "addProduct", payload });
    } else {
      dispatch({ type: "removeProduct", payload });
    }
  };

  const toggleVisibility = () => {
    dispatch({ type: "toggleVisibility" });
  };

  return {
    _context: context,
    items: context.cart,
    resetCart,
    addItemToCart,
    removeItemFromCart,
    total: context.total.toFixed(2),
    count,
    isVisible: context.isVisible,
    toggleVisibility,
    adjustQuantity,
  };
};

export default useCart;
