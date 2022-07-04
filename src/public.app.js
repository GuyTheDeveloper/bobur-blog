import { Container } from "./components";
import { Header } from "./components/layouts/main-layout/header/header";
import { SignIn } from "./pages";

export const Public = () => {
  return (
    <Container style={{ height: "100%" }}>
      <Header />
      <SignIn />
    </Container>
  );
};
