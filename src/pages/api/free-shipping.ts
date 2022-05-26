import type { NextApiRequest, NextApiResponse } from "next";
import { ProductsProps } from "~/types/products";

const freeShipping = require("./mocks/free-shipping.json");

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductsProps>
) {
  res.status(200).json(freeShipping);
}
