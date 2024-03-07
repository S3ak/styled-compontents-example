import * as UI from "./UI.styled";
import useProducts from "@hooks/useProducts";
import useCart from "@hooks/useCart";

export default function Products() {
  const { addItemToCart } = useCart();
  const [products] = useProducts();

  return (
    <UI.Container>
      <UI.List>
        {products.map((product) => (
          <UI.ListItem key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.price}</p>

            <section>
              <button onClick={() => addItemToCart(product)}>
                Add to cart
              </button>
            </section>
            <br />
          </UI.ListItem>
        ))}
      </UI.List>
    </UI.Container>
  );
}
