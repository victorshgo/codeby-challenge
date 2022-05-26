import { useMemo } from "react";

import Card from "~/components/Card";
import Items from "~/components/Items";

import { currencyFormatter } from "~/utils/format";

import { CartProps } from "./types";
import {
  Title,
  Products,
  Border,
  Price,
  Congratulations,
  Button,
} from "./styles";

const Cart = ({ data }: CartProps) => {
  const total = useMemo(() => {
    let value = 0;

    data &&
      data.items &&
      data.items.map((item) => (value += item.sellingPrice));

    return value;
  }, []);

  return (
    <Card>
      <Title>Meu carrinho</Title>
      <Products>
        {data &&
          data.items &&
          data.items.map((item) => (
            <Items
              key={item.uniqueId}
              name={item.name}
              image={item.imageUrl}
              price={item.price}
              sellingPrice={item.sellingPrice}
            />
          ))}
      </Products>
      <Border>
        <Price>
          <h3>Total</h3>
          <h3>{currencyFormatter(total)}</h3>
        </Price>
        {total > 10 && (
          <Congratulations>
            Parabéns, sua compra tem frete grátis!
          </Congratulations>
        )}
      </Border>
      <Button>Finalizar compra</Button>
    </Card>
  );
};

export default Cart;
