import { ProductModel } from '../models/product.model.js';
export const getProducts = (req, res) => res.json(ProductModel.findAll());
export const getProduct = (req, res) => {
  const p = ProductModel.findById(req.params.id);
  p ? res.json(p) : res.status(404).json({ message: 'Not found' });
};
