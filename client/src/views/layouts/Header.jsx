import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useStore } from '../../controllers/StoreContext.jsx';
import { ProductModel } from '../../models/product.model.js';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedin,
  FaYoutube, 
  FaTwitter,
  FaHeart,
  FaShoppingCart
} from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const navLinks = [
  { to: '/', label: 'Home', active: true },
  { to: '/shop', label: 'Shop' },
  { to: '/detail', label: 'Shop Detail' },
  { label: 'Pages', dropdown: true },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const { cartCount, submitSearch } = useStore();
   const { pathname } = useLocation();
  const isHome = pathname === '/';

  const [isCategoryOpen, setIsCategoryOpen] = useState(isHome); // desktop: chỉ mở sẵn ở trang Home
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile: menu hamburger
  const [isMobileCatOpen, setIsMobileCatOpen] = useState(false); // mobile: danh mục

  // Mỗi lần đổi trang: Home thì mở Categories, trang khác thì đóng lại
  useEffect(() => {
    setIsCategoryOpen(isHome);
    setIsMenuOpen(false);
    setIsMobileCatOpen(false);
  }, [pathname, isHome]);

  const [text, setText] = useState('');
  const { categories } = ProductModel;

  const onSubmit = (e) => {
    e.preventDefault();
    submitSearch(text);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full bg-white relative">
      {/* Thanh trên cùng: mobile = nền xanh nhạt, icon căn giữa | desktop = nền tím */}
      <div className="w-full bg-indigo-50 text-gray-900 lg:bg-[#5b1765] lg:text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-[42px] flex items-center justify-center lg:justify-between">
          <div className="hidden lg:flex items-center gap-2 text-sm">
            <a href="#" className="hover:text-gray-200">FAQs</a>
            <span className="text-white/40">|</span>
            <a href="#" className="hover:text-gray-200">Help</a>
            <span className="text-white/40">|</span>
            <a href="#" className="hover:text-gray-200">Support</a>
          </div>

          <div className="flex items-center gap-5 lg:gap-4 text-base lg:text-sm">
            <a href="#" aria-label="Facebook" className="font-bold"><FaFacebookF className="w-4 h-4" /></a>
            <a href="#" aria-label="Twitter" className="font-bold"><FaTwitter className="w-4 h-4" /></a>
            <a href="#" aria-label="LinkedIn" className="font-bold"><FaLinkedin /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="w-4 h-4" /></a>
            <a href="#" aria-label="YouTube"><FaYoutube className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Hàng tìm kiếm và giỏ hàng */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="py-4 lg:py-0 lg:min-h-[74px] flex items-center justify-between gap-3 lg:gap-6 border-b lg:border-b-0">
          {/* Logo placeholder: chỉ chiếm chỗ trên desktop */}
          <div className="hidden lg:flex w-[180px] shrink-0 items-center" />

          <div className="flex-1 flex lg:justify-center min-w-0">
            <form
              onSubmit={onSubmit}
              className="w-full max-w-[240px] sm:max-w-[420px] lg:max-w-[700px] h-[42px] flex border border-gray-200"
            >
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Search for products"
                className="flex-1 min-w-0 px-3 sm:px-5 text-sm outline-none"
              />
              <button
                type="submit"
                aria-label="Search"
                className="w-[44px] shrink-0 border-l border-gray-200 text-[#5b1765] hover:bg-gray-50 flex items-center justify-center"
              >
                <IoSearch />
              </button>
            </form>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              className="h-[40px] min-w-[56px] sm:min-w-[64px] px-3 border border-gray-200 flex items-center justify-center gap-2 hover:bg-gray-50"
              aria-label="Wishlist"
            >
              <span className="text-[#5b1765] text-lg"><FaHeart /></span>
              <span className="text-xs font-bold">0</span>
            </button>

            <Link
              to="/cart"
              className="h-[40px] min-w-[56px] sm:min-w-[64px] px-3 border border-gray-200 flex items-center justify-center gap-2 hover:bg-gray-50"
              aria-label="Cart"
            >
              <span className="text-[#5b1765] text-lg"><FaShoppingCart /></span>
              <span className="text-xs font-bold">{cartCount}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ===== MOBILE / TABLET: logo + nút hamburger ===== */}
      <div className="lg:hidden max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
          {/* Logo */}
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className="w-14 h-12 border border-gray-200 flex flex-col items-center justify-center gap-1.5 hover:bg-gray-50"
        >
          <span className="w-7 h-0.5 bg-gray-500" />
          <span className="w-7 h-0.5 bg-gray-500" />
          <span className="w-7 h-0.5 bg-gray-500" />
        </button>
      </div>

      {/* Menu xổ xuống trên mobile */}
      {isMenuOpen && (
        <div className="lg:hidden border-y bg-white px-4 sm:px-6 py-2 shadow-md">
          <nav className="flex flex-col text-sm font-medium text-gray-800">
            {navLinks.map((item) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={closeMenu}
                  className={`py-3 border-b ${item.active ? 'text-rose-500' : 'hover:text-[#5b1765]'}`}
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label} className="py-3 border-b flex items-center gap-1">
                  <span>{item.label}</span>
                  <span className="text-xs">▾</span>
                </div>
              )
            )}

            <div className="flex items-center gap-6 py-3">
              <Link to="/login" onClick={closeMenu} className="hover:text-[#5b1765]">Login</Link>
            </div>
            <div className="flex items-center gap-6 py-3">
              <Link to="/register" onClick={closeMenu} className="hover:text-[#5b1765]">Register</Link>
            </div>
          </nav>
        </div>
      )}

      {/* ===== DESKTOP: Categories bên trái + menu ngang bên phải ===== */}
      <div className="hidden lg:block max-w-[1400px] mx-auto px-6 border-b">
        <div className="flex items-center justify-between">
          <div className="w-[280px] relative">
            <div
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="bg-[#5b1765] text-white text-sm font-semibold px-4 py-3 flex justify-between items-center cursor-pointer select-none hover:bg-opacity-90 transition"
            >
              <span>Categories</span>
              <span className={`transform transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : 'rotate-0'}`}>
                <IoIosArrowDown />
              </span>
            </div>

            {isCategoryOpen && (
              <ul className="absolute left-0 right-0 bg-white border border-t-0 shadow-lg text-xs z-50">
                {categories.map((c) => (
                  <li key={c} className="px-4 py-2.5 border-b last:border-0 hover:text-[#5b1765] hover:bg-gray-50 cursor-pointer">
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex items-center justify-between flex-1 pl-8">
            <nav className="flex items-center gap-8 text-sm font-medium text-gray-800">
              <Link to="/" className="text-rose-500 hover:text-[#5b1765]">Home</Link>
              <Link to="/shop" className="hover:text-[#5b1765]">Shop</Link>
              <Link to="/detail" className="hover:text-[#5b1765]">Shop Detail</Link>
              <div className="relative group cursor-pointer flex items-center gap-1 hover:text-[#5b1765]">
                <span>Pages</span>
                <span className="text-xs"><IoIosArrowDown /></span>
              </div>
              <Link to="/contact" className="hover:text-[#5b1765]">Contact</Link>
            </nav>

            <div className="flex items-center gap-6 text-sm font-medium text-gray-800">
              <Link to="/login" className="hover:text-[#5b1765]">Login</Link>
              <Link to="/register" className="hover:text-[#5b1765]">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}