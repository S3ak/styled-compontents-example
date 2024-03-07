import "./App.css";
import Layout from "@components/Layout";
import Products from "@components/Products";
import CartContextProvider from "@/context/cart-context";

// Home page component
const HomePage = () => {
  return (
    <Layout>
      <Products />
    </Layout>
  );
};

function App() {
  return (
    <CartContextProvider>
      <HomePage />
    </CartContextProvider>
  );
}

export default App;
