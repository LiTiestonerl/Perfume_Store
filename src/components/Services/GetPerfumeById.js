import React, { useState } from "react";
import axios from "axios";

function GetPerfumeById() {
  const [perfumeId, setPerfumeId] = useState(""); // Lưu id từ input
  const [perfumeData, setPerfumeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Để xử lý lỗi khi có vấn đề

  // Hàm gọi API
  const fetchPerfume = async () => {
    setLoading(true); // Bắt đầu tải
    setPerfumeData(null); // Đặt lại dữ liệu
    setError(null); // Đặt lại lỗi

    try {
      const response = await axios.get(
        `http://www.perfumestore.somee.com/perfume/${perfumeId}`,
        {
          headers: {
            accept: "text/plain",
          },
        }
      );
      setPerfumeData(response.data); // Lưu dữ liệu từ API
    } catch (error) {
      console.error("Error fetching the perfume data:", error);
      setError("Could not fetch data. Please check the ID and try again.");
    } finally {
      setLoading(false); // Kết thúc tải
    }
  };

  return (
    <div>
      <h1>Perfume Search</h1>
      <input
        type="text"
        placeholder="Enter perfume ID"
        value={perfumeId}
        onChange={(e) => setPerfumeId(e.target.value)} // Cập nhật id từ input
      />
      <button onClick={fetchPerfume} disabled={!perfumeId}>
        Search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {perfumeData && <pre>{perfumeData}</pre>}
    </div>
  );
}

export default GetPerfumeById;
