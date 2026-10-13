import { useRef, useState } from 'react';

const GAP = 16;

export default function NewsCarousel({ items }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const step = () => (trackRef.current?.firstChild?.offsetWidth ?? 200) + GAP;
  const slide = (dir) => trackRef.current?.scrollBy({ left: dir * step(), behavior: 'smooth' });
  const onScroll = () => setActive(Math.round(trackRef.current.scrollLeft / step()));

  return (
  <div className="min-w-0">
    <div className="flex justify-end mb-3">
        <a href="#" className="text-sm text-gray-900 underline">View All &gt;&gt;</a>
      </div>

      <div className="relative px-7 sm:px-9">
        <button onClick={() => slide(-1)} aria-label="Previous" className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand text-xl">‹</button>

        <div
          ref={trackRef}
          onScroll={onScroll}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((n) => (
            <article key={n.id} className="snap-start flex-none w-44 sm:w-52 border bg-white px-3 py-4 flex flex-col">
              <div className="img-zoom">
                <img src={n.image} alt="" loading="lazy" className="w-full h-40 object-cover" />
              </div>
              <p className="mt-6 mb-2 text-xs text-gray-800 text-center leading-relaxed">{n.title}</p>
            </article>
          ))}
        </div>

        <button onClick={() => slide(1)} aria-label="Next" className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand text-xl">›</button>
      </div>

      {/* Chấm phân trang */}
      <div className="flex justify-center items-center gap-1.5 mt-5">
        {items.map((n, i) => (
          <span key={n.id} className={`h-1.5 rounded-full transition-all ${i === active ? 'w-5 bg-gray-800' : 'w-1.5 bg-gray-300'}`} />
        ))}
      </div>
    </div>
  );
}