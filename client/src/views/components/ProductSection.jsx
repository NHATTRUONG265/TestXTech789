
import { useRef, useState } from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductSection({ products = [] }) {
  const [activeTab, setActiveTab] = useState('description');
  const [page, setPage] = useState(0);
  const trackRef = useRef(null);

  const scroll = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setPage(max > 0 && el.scrollLeft > max / 2 ? 1 : 0);
  };

  return (
    <section className="bg-[#f1f6f7] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">

        {/* Banner bên trái */}
        <aside className="relative hidden min-h-[460px] overflow-hidden bg-white lg:block">
          <div className="absolute inset-0 p-5">
            <div className="relative z-10 max-w-[170px] pt-5">
              <h2 className="text-[22px] font-normal leading-[1.3] text-[#292929]">
                Find out what everyone’s talking about
              </h2>

              <p className="mt-8 text-xs text-gray-700">
                Browse our best
              </p>
            </div>

            {/* Các nét trang trí màu xanh ngọc */}
            <div className="absolute right-3 top-7 h-3 w-24 rotate-[15deg] rounded-full bg-[#08a994]" />
            <div className="absolute right-4 top-[105px] h-3 w-28 -rotate-[4deg] rounded-full bg-[#08a994]" />
            <div className="absolute -right-2 top-[155px] h-3 w-28 -rotate-[24deg] rounded-full bg-[#08a994]" />
            <div className="absolute right-[-15px] top-[220px] h-3 w-24 -rotate-[45deg] rounded-full bg-[#08a994]" />

            <div className="absolute -left-8 top-[245px] h-3 w-28 -rotate-[25deg] rounded-full bg-[#e8f8f5]" />
            <div className="absolute -left-8 top-[350px] h-3 w-28 rotate-[-8deg] rounded-full bg-[#e8f8f5]" />
            <div className="absolute -left-8 top-[430px] h-3 w-28 rotate-[15deg] rounded-full bg-[#e8f8f5]" />
          </div>
        </aside>

        {/* Khu vực sản phẩm */}
        <div className="min-w-0">
         {/* Tabs và View All */}
          <div className="mb-5 flex items-end justify-between gap-3 sm:mb-7 sm:min-h-[64px]">
            <div className="flex min-w-0 flex-1 sm:flex-none">
              <button
                type="button"
                onClick={() => setActiveTab('description')}
                className={`min-w-0 flex-1 border border-gray-200 px-2 py-3 text-[10px] font-semibold sm:min-w-[140px] sm:flex-none sm:px-5 sm:py-4 sm:text-[11px] ${
                  activeTab === 'description'
                    ? 'border-t-[3px] border-t-[#e5b443] bg-transparent text-gray-800'
                    : 'bg-transparent text-gray-400'
                }`}
              >
                DESCRIPTION
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('specifications')}
                className={`min-w-0 flex-1 border border-gray-200 px-2 py-3 text-[10px] font-semibold sm:min-w-[150px] sm:flex-none sm:px-4 sm:py-4 sm:text-[11px] ${
                  activeTab === 'specifications'
                    ? 'border-t-[3px] border-t-[#e5b443] text-gray-800'
                    : 'text-gray-400'
                }`}
              >
                SPECIFICATIONS
              </button>
            </div>

            <a href="/shop" className="mb-3 shrink-0 whitespace-nowrap text-xs text-gray-700 underline">
              View All &gt;&gt;
            </a>
          </div>

          {/* Carousel */}
          <div className="relative">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous products"
              className="absolute -left-5 top-[35%] z-10 hidden text-2xl text-gray-500 hover:text-[#5b1765] sm:block"
            >
              ‹
            </button>

            <div
              onScroll={onScroll}
              ref={trackRef}
              className="flex gap-4 overflow-x-auto scroll-smooth px-1 pb-4 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-[calc(50%-8px)] min-w-[155px] flex-none sm:w-[calc(33.333%-11px)] lg:w-[calc(33.333%-11px)] xl:w-[calc(25%-12px)]"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next products"
              className="absolute -right-5 top-[35%] z-10 hidden text-2xl text-gray-500 hover:text-[#5b1765] sm:block"
            >
              ›
            </button>
          </div>

          {/* Chỉ báo carousel */}
          <div className="mt-8 flex justify-center gap-2">
            <span
              className={`h-1 rounded-full ${
                page % 2 === 0 ? 'w-5 bg-gray-800' : 'w-2 bg-gray-300'
              }`}
            />
            <span
              className={`h-1 rounded-full ${
                page % 2 !== 0 ? 'w-5 bg-gray-800' : 'w-2 bg-gray-300'
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}