import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import DataTableComponent from "../Ui/DataTable";

const GetInfoUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const tableRef = useRef(null);

  // Định nghĩa cột cho DataTableComponent
  const columns = [
    { key: "userId", label: "User ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    { key: "status", label: "Status" },
    { key: "createdAt", label: "Created At" },
    { key: "lastLogin", label: "Last Login" },
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://www.perfumestorev2.somee.com/api/v1/users/admin?page=1&pageSize=10"
        );
        // Chuyển đổi dữ liệu từ API
        const transformedData = response.data.map((user) => ({
          userId: user.userId,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          role: user.role,
          status: user.status,
          createdAt: new Date(user.createdAt).toLocaleDateString(),
          lastLogin: new Date(user.lastLogin).toLocaleDateString(),
        }));
        setUsers(transformedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div ref={tableRef}>
      <DataTableComponent data={users} columns={columns} tableId="userTable" />
    </div>
  );
};

export default GetInfoUser;
