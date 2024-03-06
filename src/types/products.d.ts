export type Product = {
  id: number;
  title: string;
  price: number;
  discountedPrice: number;
  quantity: number;
};

export type ProductWithoutQuantity = Omit<Product, "quantity">;

export type ACTIONTYPE =
  | { type: "addProduct"; payload: ProductWithoutQuantity }
  | { type: "removeProduct"; payload: ProductWithoutQuantity }
  | { type: "clearCart" };