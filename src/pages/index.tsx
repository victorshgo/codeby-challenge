import Home from "~/modules/home";
import { ProductsProps } from "~/types/products";

const Page = ({
  freightPaid,
  freeShipping,
}: {
  freightPaid: ProductsProps;
  freeShipping: ProductsProps;
}) => {
  return <Home freightPaid={freightPaid} freeShipping={freeShipping} />;
};

Page.getInitialProps = async () => {
  const freightPaid = await fetch(
    "https://codeby-challenge-three.vercel.app/api/freight-paid"
  ).then((res) => res.json());

  const freeShipping = await fetch(
    "https://codeby-challenge-three.vercel.app/api/free-shipping"
  ).then((res) => res.json());

  return { freeShipping, freightPaid };
};

export default Page;
