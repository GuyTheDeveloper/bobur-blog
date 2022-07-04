import { Container } from "../../container";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Container>
        <Header />

        {children}
      </Container>
      <Footer />
    </div>
  );
};
