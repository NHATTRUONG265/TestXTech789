import { useEffect, useRef, useState } from 'react';
import { useStore } from '../../controllers/useStore.js';

export default function ProductCard({ product }) {
  const { addToCart } = useStore();
  const [added, setAdded] = useState(false); // đổi nút sang "✓ Added"
  const [clicks, setClicks] = useState(0);   // dùng làm key để chạy lại animation mỗi lần bấm
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleAdd = () => {
    addToCart(product);
    setClicks((c) => c + 1);
    setAdded(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article className="group relative flex h-full min-w-0 flex-col border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#5b1765]/40 hover:shadow-lg">
      {/* Ảnh sản phẩm */}
      <div className="relative flex aspect-[4/4.5] items-center justify-center bg-white p-4">
        {product.oldPrice > product.price && (
          <span className="absolute left-0 top-3 z-10 bg-[#75bd50] px-2 py-1 text-[9px] text-white">
            SALE
          </span>
        )}

        <div className="h-full w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>

        {/* Huy hiệu sản phẩm */}
        <div className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-[#c7a638] bg-[#f5e9a2] text-center text-[8px] font-bold leading-tight text-[#75601b]">
          BEST
          <br />
          SELLER
        </div>
      </div>

      {/* Thông tin sản phẩm */}
      <div className="flex flex-1 flex-col px-2 pb-3 pt-4 text-center">
        <p className="mb-2 text-[9px] uppercase tracking-[1px] text-gray-400">
          {product.brand || 'Nu Skin'}
        </p>

        <h3 className="line-clamp-2 min-h-8 text-xs font-normal text-gray-800 transition-colors group-hover:text-[#5b1765]">
          {product.name}
        </h3>

        <div className="mt-1 flex flex-wrap items-center justify-center gap-1">
          <span className="text-sm font-bold text-[#dca63c]">
            ${Number(product.price).toFixed(2)}
          </span>

          {product.oldPrice > product.price && (
            <s className="text-[9px] text-gray-400">
              ${Number(product.oldPrice).toFixed(2)}
            </s>
          )}
        </div>
      </div>

      {/* Nút thêm giỏ hàng */}
      <button
        type="button"
        onClick={handleAdd}
        className={`mt-auto min-h-[27px] px-2 py-1.5 text-xs text-white transition-all duration-200 active:scale-95 ${
          added ? 'bg-green-600' : 'bg-[#5b1765] hover:bg-[#43114a]'
        }`}
      >
        {added ? 'Added' : 'Add to card'}
      </button>

      {/* Hiệu ứng khi bấm: chạy lại mỗi lần nhờ key={clicks} */}
      {clicks > 0 && (
        <>
          <span
            key={`flash-${clicks}`}
            className="card-flash pointer-events-none absolute inset-0 z-20 border-2 border-[#5b1765]"
          />
          <span
            key={`plus-${clicks}`}
            className="plus-one pointer-events-none absolute bottom-10 left-1/2 z-20 -translate-x-1/2 rounded-full bg-[#5b1765] px-2 py-0.5 text-xs font-bold text-white"
          >
            +1
          </span>
        </>
      )}
    </article>
  );
}