import { getProducts } from '../../server/src/controllers/product.controller.js';

export default function handler(req, res) {
  return getProducts(req, res);
}