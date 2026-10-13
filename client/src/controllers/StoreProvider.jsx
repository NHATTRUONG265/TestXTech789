import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from './useStore.js';
import { ProductModel } from '../models/product.model.js';
import { CartModel } from '../models/cart.model.js';
import { SearchModel } from '../models/search.model.js';

// CONTROLLER: nhận sự kiện từ View -> gọi Model -> cập nhật state
export function StoreProvider({ children }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [prevPath, setPrevPath] = useState(pathname);

  useEffect(() => { ProductModel.fetchAll().then(setProducts); }, []);

  // Rời khỏi trang /detail thì xóa từ khóa (điều chỉnh state ngay lúc render, không cần effect)
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    if (pathname !== '/detail') setKeyword('');
  }

  const addToCart = (product) => setCart((c) => CartModel.add(c, product));

  const submitSearch = (text) => {
    if (!SearchModel.isValid(text)) return;
    setKeyword(SearchModel.normalize(text));
    navigate('/detail');
  };

  const value = { products, cartCount: CartModel.count(cart), addToCart, keyword, submitSearch };
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}