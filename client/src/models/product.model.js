const fallback = [1, 2, 3, 4].map((i) => ({
  id: i, brand: 'ageLOC', name: i === 2 ? 'AR24 Cream' : 'Pure Pineapple',
  price: 14, oldPrice: 35, image: `https://picsum.photos/seed/p${i}/300/300`,
}));

export const ProductModel = {
  async fetchAll() {
    try {
      const res = await fetch('/api/products');
      if (!res.ok) throw new Error('bad response');
      return await res.json();
    } catch {
      return fallback; // server chưa chạy
    }
  },
  heroSlides: [
    { id: 1, eyebrow: '10% off your first order', title: 'Reasonable Price', image: 'https://picsum.photos/seed/hero1/1200/600' },
    { id: 2, eyebrow: '10% off your first order', title: 'Fashionable Dress', image: 'https://picsum.photos/seed/hero2/1200/600' },
    { id: 3, eyebrow: 'New season arrivals', title: 'Winter Collection', image: 'https://picsum.photos/seed/hero3/1200/600' },
  ],
  categories: ['Dresses', 'Shirts', 'Jeans', 'Swimwear', 'Sleepwear', 'Sportswear', 'Jumpsuits', 'Blazers', 'Jackets', 'Shoes'],
  awards: [
    { name: 'ageLOC® LumiSpa® iO', note: '2024 Best Cleansing Device' },
    { name: 'Epoch Baobab Body Butter', note: '2023 Beauty Bible Winner' },
    { name: 'Nu Skin Enterprises', note: '2022 Best USA Beauty Brand' },
    { name: 'Epoch® Yin & Yang Mask', note: '2022 Most Sustainable Packaging' },
    { name: 'ageLOC® Facial Spa', note: '2021 Readers’ Choice Award' },
    { name: 'Nutricentials® Eye Love', note: '2022 Pure Beauty Finalist' },
  ],
  news: [1, 2, 3, 4, 5, 6, 7, 8].map((i) => ({ id: i, title: '38 New Beauty Products Our Editors Are Loving This December', image: `https://picsum.photos/seed/n${i}/300/360` })),
};
