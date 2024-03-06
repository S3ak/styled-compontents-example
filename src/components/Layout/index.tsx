import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

export default Layout;
