import "./App.css";
import Card from "@components/Card";
import Layout from "@components/Layout";
import CartContextProvider from "@/context/cart-context";
import useCart from "@/hooks/useCart";

// Home page component
const HomePage = () => {
  const { total } = useCart();

  return (
    <Layout>
      <strong>{total}</strong>
      <Card onPrimaryBtnClick={() => console.log("clicked")} />
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
