import { currencyFormatter } from "~/utils/format";

import { ItemsProps } from "./types";
import { Items as ItemsComponent, Image, Name, Prices } from "./styles";

const Items = ({ name, image, price, sellingPrice }: ItemsProps) => {
  return (
    <ItemsComponent>
      <Image src={image} />
      <div>
        <Name>{name}</Name>
        <Prices>
          <span className="price">{currencyFormatter(price)}</span>
          <span className="sellingPrice">
            {currencyFormatter(sellingPrice)}
          </span>
        </Prices>
      </div>
    </ItemsComponent>
  );
};

export default Items;
