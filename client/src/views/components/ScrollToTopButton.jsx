import { useEffect, useState } from 'react';

export default function ScrollToTopButton({ threshold = 200 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll(); // kiểm tra ngay khi tải trang
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-4 sm:right-8 z-50 w-10 h-10 sm:w-14 sm:h-14 bg-[#e7c2f2] hover:bg-[#8e4fc9] text-gray-900 flex items-center justify-center shadow-md transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Icon hai mũi tên lên */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 12 12 6 18 12" />
        <polyline points="6 19 12 13 18 19" />
      </svg>
    </button>
  );
}