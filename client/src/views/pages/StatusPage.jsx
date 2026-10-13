import { Link, useLocation, useNavigate } from 'react-router-dom';

const variants = {
  construction: {
    icon: '🚧',
    badge: 'Under Construction',
    title: 'Trang này đang được xây dựng',
    message:
      'Xin lỗi vì sự bất tiện này. Chúng tôi đang hoàn thiện trang để mang đến cho bạn trải nghiệm tốt nhất. Vui lòng quay lại sau nhé!',
  },
  notfound: {
    icon: '🔍',
    badge: 'Error 404',
    title: 'Không tìm thấy trang bạn cần',
    message:
      'Đường dẫn có thể đã bị đổi, bị xóa hoặc bạn đã nhập sai địa chỉ. Hãy quay về trang chủ để tiếp tục mua sắm.',
  },
};

export default function StatusPage({ type = 'notfound', pageName }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const v = variants[type];
  const isConstruction = type === 'construction';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-light to-white">
      {/* Họa tiết nền */}
      <div className="pointer-events-none absolute -left-16 top-10 h-48 w-48 rounded-full bg-brand/10" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#08a994]/10" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center">
        {/* Số 404 lớn hoặc icon công trình */}
        {isConstruction ? (
          <div className="mb-4 animate-bounce text-7xl sm:text-8xl" aria-hidden="true">{v.icon}</div>
        ) : (
          <div className="mb-2 flex items-center gap-2 text-8xl font-extrabold text-brand sm:text-9xl" aria-hidden="true">
            4
            <span className="animate-[spin_8s_linear_infinite] text-6xl sm:text-7xl">⚙️</span>
            4
          </div>
        )}

        <span className="mb-3 rounded-full bg-brand px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
          {v.badge}
        </span>

        <h1 className="text-2xl font-bold text-gray-900 sm:text-4xl">
          {isConstruction && pageName ? `Trang “${pageName}” đang được xây dựng` : v.title}
        </h1>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">{v.message}</p>

        {/* Đường dẫn người dùng vừa bấm */}
        <code className="mt-5 max-w-full truncate rounded bg-white px-3 py-1.5 text-xs text-gray-500 shadow-sm ring-1 ring-gray-200">
          {pathname}
        </code>

        {/* Thanh tiến độ giả lập cho trang đang xây dựng */}
        {isConstruction && (
          <div className="mt-6 w-full max-w-xs">
            <div className="h-2 overflow-hidden rounded-full bg-gray-200">
              <div className="h-full w-2/3 animate-pulse rounded-full bg-[#e5b443]" />
            </div>
            <p className="mt-1 text-xs text-gray-400">Đang hoàn thiện…</p>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="rounded bg-brand px-6 py-2.5 text-sm font-medium text-white transition hover:bg-brand-dark active:scale-95"
          >
            ← Về trang chủ
          </Link>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="rounded border border-brand px-6 py-2.5 text-sm font-medium text-brand transition hover:bg-brand hover:text-white active:scale-95"
          >
            Quay lại trang trước
          </button>
        </div>
      </div>
    </section>
  );
}