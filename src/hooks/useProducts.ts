import { Product } from "@/types/products";

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

// Custom hook to use the cart context
const useProducts = () => {
  return [products];
};

export default useProducts;
