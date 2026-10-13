import { useEffect, useState } from 'react';

export default function ScrollToTopButton({ threshold = 200 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
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
      className={`fixed right-4 sm:right-8 z-50 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center
        rounded-xl border border-gray-300 bg-transparent text-gray-700 backdrop-blur-sm
        bottom-[calc(1rem+env(safe-area-inset-bottom))] sm:bottom-6
        transition-all duration-300 hover:border-[#5b1765] hover:bg-white/80 hover:text-[#5b1765] active:scale-95
        ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="6 12 12 6 18 12" />
        <polyline points="6 19 12 13 18 19" />
      </svg>
    </button>
  );
}