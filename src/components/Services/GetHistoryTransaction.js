import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTableComponent from "../Ui/DataTable";

const HistoryTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Định nghĩa các cột cho bảng
  const columns = [
    { key: "transactionId", label: "Transaction ID" },
    { key: "orderId", label: "Order ID" },
    { key: "paymentMethod", label: "Payment Method" },
    { key: "paymentStatus", label: "Payment Status" },
    { key: "transactionDate", label: "Transaction Date" },
    { key: "totalAmount", label: "Total Amount" },
  ];

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "https://www.perfumestorev2.somee.com/api/Transaction/transaction/admin",
          {
            params: {
              page: 1,
              pageSize: 10,
            },
          }
        );

        // Chuyển đổi dữ liệu từ API
        const transformedData = response.data.map((transaction) => ({
          transactionId: transaction.transactionId,
          orderId: transaction.order?.orderId,
          paymentMethod: transaction.paymentMethod,
          paymentStatus: transaction.paymentStatus,
          transactionDate: new Date(
            transaction.transactionDate
          ).toLocaleString(),
          totalAmount: transaction.order?.totalAmount
            ? `${transaction.order.totalAmount} VND`
            : "N/A",
        }));

        setTransactions(transformedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <DataTableComponent
        data={transactions}
        columns={columns}
        tableId="historyTransactions"
      />
    </div>
  );
};

export default HistoryTransaction;
