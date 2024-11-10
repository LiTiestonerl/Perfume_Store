import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTableComponent from "../Ui/DataTable";

const GetPerfume = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Định nghĩa các cột cho bảng
  const columns = [
    { key: "image", label: "Image" },
    { key: "name", label: "Name" },
    { key: "category", label: "Category" },
    { key: "stock", label: "Stock Quantity" },
    { key: "price", label: "Price" },
    { key: "releaseDate", label: "Release Date" },
    { key: "rating", label: "Rating" },
  ];

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
          category: perfume.scent,
          stock: perfume.stockQuantity,
          price: `$${perfume.price}`,
          releaseDate: new Date(perfume.dateAdded).toLocaleDateString(),
          rating: perfume.viewCount,
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
      <DataTableComponent
        data={perfumes}
        columns={columns}
        tableId="perfumeTable"
      />
    </div>
  );
};

export default GetPerfume;
