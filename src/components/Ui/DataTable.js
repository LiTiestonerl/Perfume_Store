import React, { useEffect } from "react";
import { DataTable } from "simple-datatables";

// Custom hook for initializing the DataTable
const useDataTable = (tableId, data) => {
  useEffect(() => {
    const table = document.getElementById(tableId);
    if (table) {
      new DataTable(table);
    }
  }, [tableId, data]);
};

const DataTableComponent = ({ data = [] }) => {
  // Sử dụng custom hook để khởi tạo DataTable
  useDataTable("getAllPerfume", data);

  return (
    <div className="table-responsive">
      <table
        id="getAllPerfume"
        className="table table-striped table-bordered table-hover"
      >
        <thead className="table-dark">
          <tr>
            <th>No</th>
            <th>Picture</th>
            <th>Name</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Release Date</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={row.image || "default-image.jpg"}
                  alt={row.name || "No Image"}
                  className="data-table-image"
                />
              </td>
              <td>{row.name}</td>
              <td>{row.category}</td>
              <td>{row.stock}</td>
              <td>{row.price}</td>
              <td>{row.releaseDate}</td>
              <td>{row.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTableComponent;
