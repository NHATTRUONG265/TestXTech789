import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductModel } from '../models/product.model.js';
import { CartModel } from '../models/cart.model.js';
import { SearchModel } from '../models/search.model.js';

const StoreContext = createContext(null);
export const useStore = () => useContext(StoreContext);

// CONTROLLER: nhận sự kiện từ View -> gọi Model -> cập nhật state
export function StoreProvider({ children }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => { ProductModel.fetchAll().then(setProducts); }, []);

  const addToCart = (product) => setCart((c) => CartModel.add(c, product));

  const submitSearch = (text) => {
    if (!SearchModel.isValid(text)) return;
    setKeyword(SearchModel.normalize(text));
    navigate('/detail');
  };

  const value = { products, cartCount: CartModel.count(cart), addToCart, keyword, submitSearch };
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
