import React, { useEffect } from "react";
import { DataTable } from "simple-datatables";
import FileUpload from "./FileUpload";

const DataTableComponent = ({ data }) => {
  useEffect(() => {
    const table = document.getElementById("datatablesSimple");
    if (table) {
      new DataTable(table);
    }
  }, [data]);

  return (
    <div className="table-responsive">
      <table
        id="datatablesSimple"
        className="table table-striped table-bordered table-hover"
      >
        <thead className="table-dark">
          <tr>
            <th>No</th>
            <th>Insert Picture</th>
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
              <td><FileUpload></FileUpload></td>
              <td>
                <img
                  src={row.image}
                  alt={row.name}
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
