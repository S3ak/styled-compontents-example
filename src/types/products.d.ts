declare module "products" {
  export interface Product {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
  }

  export type ProductData = {
    limit: number;
    products: Product[];
    skip: number;
    total: number;
  };

  export type ProductWithQuantity = Product & { quantity: number };

  export type ACTIONTYPE =
    | { type: "addProduct"; payload: Product }
    | { type: "removeProduct"; payload: Product }
    | { type: "clearCart" }
    | { type: "toggleVisibility" }
    | { type: "removeMaxQuantity"; payload: Product };

  export type CartState = {
    cart: ProductWithQuantity[];
    total: number;
    isVisible: boolean;
  };
}
