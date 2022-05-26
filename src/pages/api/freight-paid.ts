import type { NextApiRequest, NextApiResponse } from "next";
import { ProductsProps } from "~/types/products";

const freightPaid = require("./mocks/freight-paid.json");

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductsProps>
) {
  res.status(200).json(freightPaid);
}
