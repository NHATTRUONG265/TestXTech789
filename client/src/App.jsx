import { Routes, Route } from 'react-router-dom';
import MainLayout from './views/layouts/MainLayout.jsx';
import HomePage from './views/pages/HomePage.jsx';
import DetailPage from './views/pages/DetailPage.jsx';
import StatusPage from './views/pages/StatusPage.jsx';
import { upcomingRoutes } from './models/route.model.js';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />

        {/* Các trang chưa hoàn thiện: hiện giao diện "Đang xây dựng" */}
        {upcomingRoutes.map((r) => (
          <Route
            key={r.path}
            path={r.path}
            element={<StatusPage type="construction" pageName={r.title} />}
          />
        ))}

        {/* Mọi đường dẫn còn lại: 404 */}
        <Route path="*" element={<StatusPage type="notfound" />} />
      </Route>
    </Routes>
  );
}