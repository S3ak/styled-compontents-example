import "./App.css";
import Layout from "@components/Layout";
import CartContextProvider from "@/context/cart-context";
import useCart from "@hooks/useCart";
import useProducts from "@hooks/useProducts";
import Aside from "@components/Aside";

// Home page component
const HomePage = () => {
  const { total, addItemToCart } = useCart();
  const [products] = useProducts();

  return (
    <Layout>
      <strong>{total}</strong>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.price}</p>

          <section>
            <button onClick={() => addItemToCart(product)}>Add to cart</button>
          </section>
          <br />
        </div>
      ))}
    </Layout>
  );
};

function App() {
  return (
    <CartContextProvider>
      <HomePage />
      <Aside />
    </CartContextProvider>
  );
}

export default App;
