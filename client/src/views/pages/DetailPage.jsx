import { useState } from 'react';
import { useStore } from '../../controllers/useStore.js';

function KeywordBox({ initial }) {
  const [content, setContent] = useState(initial);
  return (
    <textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
      rows={8}
      placeholder="Nhập từ khóa ở ô tìm kiếm phía trên…"
      className="w-full border rounded p-3 focus:outline-none focus:ring-2 focus:ring-brand"
    />
  );
}

export default function DetailPage() {
  const { keyword } = useStore();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Shop Detail</h1>
      <p className="text-sm text-gray-500 mb-2">Dữ liệu vừa nhập ở ô tìm kiếm:</p>
      <KeywordBox key={keyword} initial={keyword} />
    </div>
  );
}