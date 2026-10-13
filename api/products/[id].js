import { getProduct } from '../../server/src/controllers/product.controller.js';

export default function handler(req, res) {
  req.params = { id: req.query.id };
  return getProduct(req, res);
}