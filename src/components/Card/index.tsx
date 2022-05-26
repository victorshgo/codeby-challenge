import { CardProps } from "./types";
import { Card as CardComponent } from "./styles";

const Card = ({ children }: CardProps) => {
  return <CardComponent>{children}</CardComponent>;
};

export default Card;
