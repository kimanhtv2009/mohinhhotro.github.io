import React, { useState } from 'react';
import Modal from './components/Modal';

// --- QUAN TRỌNG ---
// Đây là nơi chứa các đường link sách lật Heyzine của bạn.
const heyzineLinks = {
  book1: "https://heyzine.com/flip-book/c988c7570f.html",
  book2: "https://heyzine.com/flip-book/9d83d36276.html"
};

const App: React.FC = () => {
  const [modalUrl, setModalUrl] = useState<string | null>(null);

  const openModal = (bookKey: keyof typeof heyzineLinks) => {
    setModalUrl(heyzineLinks[bookKey]);
  };

  const closeModal = () => {
    setModalUrl(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center space-y-6">

        {/* --- LOGO --- */}
        {/* Logo đã được cập nhật từ link Google Drive */}
        <img
          src="https://drive.google.com/uc?export=view&id=1GSgbA-My379h3ZmVeIc4xyUH2UX5KB7Z"
          alt="Logo"
          className="mx-auto h-24 w-24 mb-4"
        />

        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          MÔ HÌNH HỖ TRỢ
        </h1>

        <div className="space-y-4 pt-4">
          <button
            onClick={() => openModal('book1')}
            className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-200 ease-in-out transform hover:-translate-y-1"
          >
            Thang đo chẩn đoán, đánh giá mức độ ái kỷ ở học sinh THPT
          </button>
          <button
            onClick={() => openModal('book2')}
            className="w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition-all duration-200 ease-in-out transform hover:-translate-y-1"
          >
            Cẩm nang tư vấn hỗ trợ kiểm soát khuynh hướng ái kỷ trong học đường
          </button>
        </div>
      </div>

      {modalUrl && <Modal url={modalUrl} onClose={closeModal} />}
    </div>
  );
};

export default App;