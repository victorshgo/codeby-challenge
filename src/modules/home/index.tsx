import Layout from "~/layouts";
import Cart from "~/components/Cart";

import { HomeProps } from "./types";
import { Title, Grid } from "./styles";

const Home = ({ freightPaid, freeShipping }: HomeProps) => {
  return (
    <Layout>
      <Title>
        Front-end Developer for <a href="https://codeby.global/">Codeby</a>
      </Title>

      <Grid>
        <Cart data={freightPaid} />
        <Cart data={freeShipping} />
      </Grid>
    </Layout>
  );
};

export default Home;
