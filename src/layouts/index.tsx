import Head from "next/head";

import { LayoutProps } from "./types";
import { Container, Main } from "./styles";

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Head>
        <title>Carrinho de Compras</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
