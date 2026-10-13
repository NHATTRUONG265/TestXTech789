import { useStore } from '../../controllers/StoreContext.jsx';
import { ProductModel } from '../../models/product.model.js';
import SectionTitle from '../components/SectionTitle.jsx';
import ProductSection from '../components/ProductSection.jsx';
import AwardsSection from '../components/AwardsSection.jsx';
import NewsCarousel from '../components/NewsCarousel.jsx';
import HeroSlider from '../components/HeroSlider.jsx';

const img = (s, w = 800, h = 500) => `https://picsum.photos/seed/${s}/${w}/${h}`;

export default function HomePage() {
  const { products } = useStore();
  const { news, heroSlides } = ProductModel;

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
      {/* Hero (Categories nằm ở Header, cột trái để trống cho danh sách xổ xuống) */}
      <section className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-4 lg:gap-8 mt-2">
      <div />
      <div className="space-y-4 min-w-0">
        <HeroSlider slides={heroSlides} />
          <div className="grid sm:grid-cols-2 gap-4">
            {['b1', 'b2'].map((s) => (
              <div key={s} className="img-zoom relative h-36 flex items-center px-6">
                <div className="zoom-bg absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img(s, 600, 300)})` }} />
                <div className="absolute inset-0 bg-white/60" />
                <div className="relative text-xs">
                  <p>PREFER CUSTOMER 2025</p>
                  <p className="font-bold text-base">Winter Collection</p>
                  <button className="mt-2 bg-white/70 border px-3 py-1">Shop Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Most popular */}
      <SectionTitle>Most Popular Products</SectionTitle>
      <ProductSection products={products} />

      {/* Feature */}
      <section className="mt-16 bg-gray-100 grid md:grid-cols-2 gap-6 items-center">
        <div className="relative">
          <div className="img-zoom">
            <img src={img('face', 700, 450)} alt="ageLOC LumiSpa" loading="lazy" className="w-full h-64 md:h-80 object-cover" />
          </div>
          <span className="absolute top-3 right-3 bg-brand text-white text-xs rounded-full w-14 h-14 flex flex-col items-center justify-center">
            Sale Of<b>$29.99</b>
          </span>
        </div>
        <div className="p-6">
          <p className="text-red-600 text-xs">AGELOC® LUMISPA® IO</p>
          <h3 className="text-2xl font-bold my-2">ageLOC® LumiSpa® iO</h3>
          <p className="text-sm">Elevate your skincare routine</p>
          <button className="mt-4 bg-brand text-white text-xs px-5 py-2">SHOP NOW</button>
        </div>
      </section>

      {/* Awards */}
      <SectionTitle>Award And Recognition</SectionTitle>
      <div className="img-zoom relative h-[90px]">
        <img src={img('awards-banner', 1400, 120)} alt="Beauty & Wellness Device Systems" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/50 flex items-center justify-end px-4 sm:px-8 text-xs sm:text-base text-right">
          <p>WORLD’S #1 COMPANY FOR <b>Beauty & Wellness Device Systems</b></p>
        </div>
      </div>

      <AwardsSection />

      {/* Nu Skin Way */}
      <SectionTitle>The Nu Skin Way</SectionTitle>
      <div className="border p-6 grid sm:grid-cols-2 gap-4 items-center">
        <h3 className="text-2xl">Nu Skin,<br />Improving Lives Everyday</h3>
        <div className="grid grid-cols-3 text-center text-xs">
          {[['25+', 'Years of Giving'], ['20+', 'Current Social Projects'], ['850M+', 'Meals Donated']].map(([n, l]) => (
            <div key={l}><p className="text-xl">{n}</p><p className="text-gray-500">{l}</p></div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 mt-8">
        <div className="img-zoom">
          <img src={img('kids', 700, 400)} alt="Children" loading="lazy" className="w-full h-64 object-cover" />
        </div>
        <div className="bg-gray-50 p-8">
          <h3 className="text-2xl mb-3">Being a Force for Good</h3>
          <p className="text-xs text-gray-600">Some call it corporate social responsibility. We call it our purpose. Together we’re engaged in initiatives worldwide.</p>
          <p className="text-xs mt-4">Explore our projects</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 mt-6">
        <div className="bg-gray-50 p-8 order-2 md:order-1">
          <h3 className="text-2xl mb-3">Nature + Science</h3>
          <p className="text-xs text-gray-600">We combine the best in nature with innovative science and technology.</p>
          <p className="text-xs mt-4">Discover more</p>
        </div>
        <div className="img-zoom order-1 md:order-2">
          <img src={img('leaf', 700, 400)} alt="Nature and science" loading="lazy" className="w-full h-64 object-cover" />
        </div>
      </div>

      {/* News */}
      <SectionTitle>Nu Skin In The News</SectionTitle>
      <div className="grid lg:grid-cols-[minmax(0,1fr)_15rem] gap-6 items-stretch">
        <NewsCarousel items={news} />
        <div className="img-zoom hidden lg:flex relative flex-col justify-center items-center text-white min-h-[22rem]">
          <div className="zoom-bg absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img('news', 400, 700)})` }} />
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative text-center mt-24">
            <h3 className="text-3xl font-bold">News</h3>
            <p className="text-xs mt-3 pb-1 border-b border-white">Nu Skin In The News</p>
          </div>
        </div>
      </div>
    </div>
  );
}