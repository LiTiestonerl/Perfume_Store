// GetPerfume.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "../Ui/DataTable";

const GetPerfume = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPerfumes = async () => {
      try {
        const response = await axios.get(
          "https://www.perfumestorev2.somee.com/api/v1/perfumes?page=1&pageSize=5"
        );
        // Chuyển đổi dữ liệu từ API
        const transformedData = response.data.map((perfume) => ({
          image: perfume.imageUrl,
          name: perfume.name,
          category: perfume.scent, // Sử dụng scent làm category
          stock: perfume.stockQuantity,
          price: `$${perfume.price}`, // Định dạng giá
          releaseDate: new Date(perfume.dateAdded).toLocaleDateString(),
          rating: perfume.viewCount, // Giả định viewCount là rating
        }));
        setPerfumes(transformedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPerfumes();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <DataTable data={perfumes} />
    </div>
  );
};

export default GetPerfume;
