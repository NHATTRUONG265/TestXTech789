const products = [
  { id: 1, brand: 'ageLOC', name: 'Pure Pineapple', price: 14.0, oldPrice: 35.0, image: 'https://www.google.com/imgres?q=img&imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-photo%2Fimage-260nw-2050481219.jpg&imgrefurl=https%3A%2F%2Fseeklogo.com%2Fvector-logo%2F70706%2Fimg&docid=t9SAARHfsxyUFM&tbnid=43sIHHSI0j1M0M&vet=12ahUKEwj1j-_lkrSXAxUmxTgGHfpYAMwQnPAOegUI0AIQAA..i&w=260&h=280&hcb=2&ved=2ahUKEwj1j-_lkrSXAxUmxTgGHfpYAMwQnPAOegUI0AIQAA' },
  { id: 2, brand: 'ageLOC', name: 'AR24 Cream', price: 14.0, oldPrice: 35.0, image: 'https://www.google.com/imgres?q=img&imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-photo%2Fimage-260nw-2050481219.jpg&imgrefurl=https%3A%2F%2Fseeklogo.com%2Fvector-logo%2F70706%2Fimg&docid=t9SAARHfsxyUFM&tbnid=43sIHHSI0j1M0M&vet=12ahUKEwj1j-_lkrSXAxUmxTgGHfpYAMwQnPAOegUI0AIQAA..i&w=260&h=280&hcb=2&ved=2ahUKEwj1j-_lkrSXAxUmxTgGHfpYAMwQnPAOegUI0AIQAA' },
  { id: 3, brand: 'ageLOC', name: 'Pure Pineapple', price: 14.0, oldPrice: 35.0, image: 'https://www.google.com/imgres?q=img&imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-photo%2Fimage-260nw-2050481219.jpg&imgrefurl=https%3A%2F%2Fseeklogo.com%2Fvector-logo%2F70706%2Fimg&docid=t9SAARHfsxyUFM&tbnid=43sIHHSI0j1M0M&vet=12ahUKEwj1j-_lkrSXAxUmxTgGHfpYAMwQnPAOegUI0AIQAA..i&w=260&h=280&hcb=2&ved=2ahUKEwj1j-_lkrSXAxUmxTgGHfpYAMwQnPAOegUI0AIQAA' },
  { id: 4, brand: 'ageLOC', name: 'Epoch Mask', price: 18.0, oldPrice: 40.0, image: 'https://www.google.com/imgres?q=img&imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-photo%2Fimage-260nw-2050481219.jpg&imgrefurl=https%3A%2F%2Fseeklogo.com%2Fvector-logo%2F70706%2Fimg&docid=t9SAARHfsxyUFM&tbnid=43sIHHSI0j1M0M&vet=12ahUKEwj1j-_lkrSXAxUmxTgGHfpYAMwQnPAOegUI0AIQAA..i&w=260&h=280&hcb=2&ved=2ahUKEwj1j-_lkrSXAxUmxTgGHfpYAMwQnPAOegUI0AIQAA' },
];
export const ProductModel = {
  findAll: () => products,
  findById: (id) => products.find((p) => p.id === Number(id)),
};
