// Logic thuần của giỏ hàng (không phụ thuộc React)
export const CartModel = {
  add(items, product) {
    const found = items.find((i) => i.id === product.id);
    return found
      ? items.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i))
      : [...items, { ...product, qty: 1 }];
  },
  count: (items) => items.reduce((sum, i) => sum + i.qty, 0),
};
