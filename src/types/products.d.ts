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

  export type ProductWithQuantity = Product & {
    quantity: number;
    discountedPrice: number;
  };

  export type ACTIONTYPE =
    | { type: "addProduct"; payload: ProductWithQuantity }
    | { type: "removeProduct"; payload: ProductWithQuantity }
    | { type: "clearCart" }
    | { type: "toggleVisibility" }
    | { type: "removeMaxQuantity"; payload: ProductWithQuantity };

  export type CartState = {
    cart: ProductWithQuantity[];
    total: number;
    isVisible: boolean;
  };
}
