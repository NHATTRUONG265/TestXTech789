import { useRef, useState, useEffect } from 'react';
import { ProductModel } from '../../models/product.model.js';

// Tạo đường dẫn ảnh mẫu tự động
const awardImages = Array.from({ length: 6 }, (_, i) => ({
  image: `https://picsum.photos/seed/award${i + 1}/300/300`,
}));

export default function AwardsSection() {
  const awards = ProductModel.awards || [];

  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Mỗi slide hiển thị 6 giải thưởng
  const visibleCount = 6;
  const totalPages = Math.ceil(awards.length / visibleCount);

  const scrollToPage = (page) => {
    if (!trackRef.current || totalPages === 0) return;

    const nextPage = (page + totalPages) % totalPages;
    const track = trackRef.current;

    track.scrollTo({
      left: track.clientWidth * nextPage,
      behavior: 'smooth',
    });

    setActiveIndex(nextPage);
  };

  // Tự động chuyển slide sau 3 giây
  useEffect(() => {
    if (totalPages <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % totalPages;

        if (trackRef.current) {
          trackRef.current.scrollTo({
            left: trackRef.current.clientWidth * next,
            behavior: 'smooth',
          });
        }

        return next;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <section className="w-full bg-white px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-[1200px]">
        {/* Vùng hiển thị carousel */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-full overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="grid w-full shrink-0 grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-5"
              >
                {awards
                  .slice(
                    pageIndex * visibleCount,
                    (pageIndex + 1) * visibleCount
                  )
                  .map((award) => {
                    const originalIndex = awards.findIndex(
                      (item) => item.name === award.name
                    );

                    return (
                      <article
                        key={award.name}
                        className="flex min-w-0 flex-col items-center text-center"
                      >
                        <div className="img-zoom mb-2 flex h-[90px] w-[90px] items-center justify-center">
                          <img
                            src={awardImages[originalIndex % awardImages.length].image}
                            alt={`${award.name} award`}
                            className="h-full w-full rounded-full object-cover"
                            loading="lazy"
                            />
                        </div>

                        <h3 className="mb-1 max-w-[145px] text-[15px] font-normal leading-[1.4] text-[#252525]">
                          {award.name}
                        </h3>

                        <p className="max-w-[145px] text-[11px] leading-[1.65] text-[#444]">
                          {award.note}
                        </p>
                      </article>
                    );
                  })}
              </div>
            ))}
          </div>
        </div>

        {/* Chấm điều hướng */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center gap-[7px]">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => scrollToPage(index)}
                className={`h-[6px] rounded-full transition-all ${
                  activeIndex === index
                    ? 'w-5 bg-[#1689ed]'
                    : 'w-[6px] bg-[#d1d1d1]'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

