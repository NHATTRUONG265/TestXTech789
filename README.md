# NuSkin MVC (React + Tailwind CSS + Node.js)

## Chạy project local
```bash
# Terminal 1 - Server (http://localhost:5000)
cd server && npm install && npm run dev
# Terminal 2 - Client (http://localhost:5173)
cd client && npm install && npm run dev
```

## Kiến trúc MVC
|    Tầng    |                Client (`client/src`)                               | Server (`server/src`)     |
|------------|--------------------------------------------------------------------|---------------------------|
| Model      | `models/` dữ liệu + logic thuần (product, cart, search)            | `models/product.model.js` |
| View       | `views/` layouts, pages, components (chỉ hiển thị) | JSON response |
| Controller | `controllers/StoreContext.jsx` xử lý sự kiện (add to cart, search) | `controllers/` + `routes/`|

Luồng: View gọi hàm Controller -> Controller gọi Model -> cập nhật state -> View render lại.
