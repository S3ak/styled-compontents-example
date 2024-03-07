import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import Aside from "../Aside";
import Body from "@components/Body";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Body>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <Aside />
    </Body>
  );
}

export default Layout;
