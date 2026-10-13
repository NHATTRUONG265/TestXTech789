import { useEffect, useRef, useState } from 'react';

export default function HeroSlider({ slides, interval = 5000 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);
  const count = slides.length;

  const go = (i) => setIndex((i + count) % count);
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  // Tự động chuyển slide, tạm dừng khi rê chuột vào
  useEffect(() => {
    if (paused || count < 2) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(timer);
  }, [paused, count, interval]);

  // Vuốt trên điện thoại
  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(diff) > 50) (diff < 0 ? next : prev)();
    touchX.current = null;
  };

  const arrowClass =
    'absolute top-1/2 -translate-y-1/2 z-10 w-8 h-10 sm:w-10 sm:h-12 bg-black/40 hover:bg-black/60 text-white text-2xl flex items-center justify-center transition';

  return (
    <div
      className="relative w-full overflow-hidden h-56 sm:h-72 lg:h-80"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Dải slide trượt ngang */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s) => (
          <div
            key={s.id}
            className="relative flex-none w-full h-full bg-cover bg-center text-white flex flex-col items-center justify-center text-center px-10"
            style={{ backgroundImage: `url(${s.image})` }}
          >
            <div className="absolute inset-0 bg-black/30" />
            <p className="relative text-xs sm:text-sm uppercase">{s.eyebrow}</p>
            <h1 className="relative text-3xl sm:text-5xl font-bold my-3">{s.title}</h1>
            <button className="relative bg-white text-gray-900 hover:bg-gray-100 px-4 py-1.5 text-xs">
              Shop Now
            </button>
          </div>
        ))}
      </div>

      {/* Mũi tên hai bên */}
      <button onClick={prev} aria-label="Previous slide" className={`${arrowClass} left-3 sm:left-5`}>‹</button>
      <button onClick={next} aria-label="Next slide" className={`${arrowClass} right-3 sm:right-5`}>›</button>

      {/* Chấm chỉ vị trí slide */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === index ? 'w-5 bg-white' : 'w-2 bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}