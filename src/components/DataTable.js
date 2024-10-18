import React, { useEffect } from 'react';
import { DataTable } from 'simple-datatables';

const DataTableComponent = ({ data }) => {
    useEffect(() => {
        const table = document.getElementById('datatablesSimple');
        if (table) {
            new DataTable(table);
        }
    }, [data]);

    return (
        <table id="datatablesSimple">
            <thead>
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
                        <td>{index+1}</td>
                        <td>{row.picture}</td>
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
    );
};

export default DataTableComponent;
