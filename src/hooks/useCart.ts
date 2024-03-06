import { CartContext, CartDispatchContext } from "@/context/cart-context";
import { ACTIONTYPE } from "@/types/products";
import { useContext } from "react";

// Custom hook to use the cart context
const useCart = () => {
  const context = useContext(CartContext);
  const dispatch = useContext<React.Dispatch<ACTIONTYPE> | null>(
    CartDispatchContext
  );

  if (context === undefined || dispatch === null) {
    throw new Error("useCart must be used within a CartProvider");
  }

  const resetCart = () => {
    dispatch({ type: "clearCart" });
  };

  return { context, resetCart, total: context.total };
};

export default useCart;
