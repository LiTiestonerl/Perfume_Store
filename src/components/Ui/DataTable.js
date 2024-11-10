import React, { useEffect } from "react";
import { DataTable } from "simple-datatables";

// Hook tùy chỉnh để khởi tạo DataTable
const useDataTable = (tableId, data) => {
  useEffect(() => {
    const table = document.getElementById(tableId);
    if (table) {
      new DataTable(table);
    }
  }, [tableId, data]);
};

const DataTableComponent = ({
  data = [],
  columns = [],
  tableId = "dataTable",
}) => {
  // Sử dụng hook tùy chỉnh để khởi tạo DataTable
  useDataTable(tableId, data);

  // Nếu không có cột hoặc dữ liệu, hiển thị thông báo
  if (!columns.length) return <p>Không có cột được cung cấp</p>;
  if (!data.length) return <p>Không có dữ liệu</p>;

  return (
    <div className="table-responsive">
      <table
        id={tableId}
        className="table table-striped table-bordered table-hover"
      >
        <thead className="table-dark">
          <tr>
            <th>No</th>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {columns.map((col) => (
                <td key={col.key}>
                  {col.key === "image" ? (
                    <img
                      src={row[col.key] || "default-image.jpg"}
                      alt={row.name || "Không có ảnh"}
                      className="data-table-image"
                      style={{ width: "50px", height: "50px" }}
                    />
                  ) : (
                    row[col.key] || "N/A"
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTableComponent;
