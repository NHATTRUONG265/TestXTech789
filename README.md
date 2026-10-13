# TESTXTECH789 

## Chạy project local
```bash
# Terminal 1 - Server (http://localhost:5000)
cd server && npm install && npm run dev
# Terminal 2 - Client (http://localhost:5173)
cd client && npm install && npm run dev
```
## Chạy project đã host
https://testxtech789.vercel.app/

## Tóm tắt dự án

- Frontend: React 19 + Vite + Tailwind CSS
- Backend: Express 5
- Deployment: Vercel 

## Giao diện chính

- Trang chủ với Hero Slider, banner quảng cáo, sản phẩm phổ biến, awards, new
- Header chứa tìm kiếm, wishlist, giỏ hàng, category dropdown
- Trang Shop Detail hiển thị nội dung keyword vừa nhập từ ô tìm kiếm
- Trang status cho các route chưa hoàn thiện như Shop, Cart, Checkout, Login, Register
- Responsive layout cho desktop và mobile

## Cấu trúc thư mục

```text
TESTXTECH789/
├── api/
│   └── products/
│       ├── index.js
│       └── [id].js
├── client/
│   ├── public/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── StoreProvider.jsx
│   │   │   └── useStore.js
│   │   ├── models/
│   │   │   ├── cart.model.js
│   │   │   ├── product.model.js
│   │   │   ├── route.model.js
│   │   │   └── search.model.js
│   │   ├── views/
│   │   │   ├── components/
│   │   │   ├── layouts/
│   │   │   └── pages/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── index.html
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── product.controller.js
│   │   ├── models/
│   │   │   └── product.model.js
│   │   └── routes/
│   │       └── product.routes.js
│   ├── index.js
│   └── package.json
├── packege.json
├── vercel.json
├── README.md
└── .git/
```

## Tính năng chính
- Responsive UI, menu mobile, dropdown category
- Đếm số lượng sản phẩm trong giỏ hàng khi nhân thêm giỏ hàng
- Tìm kiếm sản phẩm bằng input ở header
- Hiển thị danh sách sản phẩm dạng card
- Có trang trạng thái cho các tính năng đang phát triển

## note

Project tuân theo mô hình MVC đơn giản:
- Model: xử lý dữ liệu và logic nghiệp vụ như product, cart, search
- View: components và layouts hiển thị UI
- Controller: store/provider, route handlers và xử lý sự kiện

