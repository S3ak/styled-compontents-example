import { useCallback, useEffect, useState } from "react";
import { ProductData, ProductWithQuantity } from "products";

// Custom hook to use the cart context
const useProducts = () => {
  const [products, setProducts] = useState<ProductWithQuantity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  // const controller = new AbortController();
  // const signal = controller.signal;

  const fetchProducts = useCallback(async () => {
    // const timeoutId = setTimeout(() => controller.abort(), 500);

    try {
      const res = await window.fetch("https://dummyjson.com/products", {
        // signal,
      });
      const { products: productList }: ProductData = await res.json();
      setProducts(
        productList.map((product) => ({
          ...product,
          quantity: 0,
          discountedPrice: Number(
            (
              product.price -
              product.price * (product.discountPercentage / 100)
            ).toFixed(2)
          ),
        }))
      );
    } catch (error) {
      if (error instanceof Error) {
        // Handle known errors
        setError(error.message);
      } else if (typeof error === "string") {
        // Handle unexpected errors
        setError(error);
      }

      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
      // clearTimeout(timeoutId);
    }
  }, []);

  useEffect(() => {
    // const reason = new DOMException("cleaning up", "AbortError");
    fetchProducts();

    return () => {
      // controller.abort(reason);
    };
  }, [fetchProducts]);

  return { products, isLoading, isError, error };
};

export default useProducts;
