import React, { useState } from "react";
import Navbar from "../Navigation/Navbar"; // Đường dẫn tùy chỉnh
import Sidebar from "../Navigation/Sidebar"; // Đường dẫn tùy chỉnh
import Footer from "../Ui/Footer"; // Đường dẫn tùy chỉnh
import GetHistoryTransaction from "../Services/GetHistoryTransaction"; // Đường dẫn đến service

const HistoryTransaction = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="sb-nav-fixed">
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="d-flex" id="layoutSidenav">
        <Sidebar isOpen={isSidebarOpen} />
        <div
          id="layoutSidenav_content"
          className="flex-grow-1"
          style={{
            marginLeft: isSidebarOpen ? "0px" : "0", // Có thể tùy chỉnh thêm phần này nếu cần
            transition: "margin-left 0.3s ease-in-out",
          }}
        >
          {/* Data Table Section for Transactions */}
          <div className="row">
            <div className="col-xl-12">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Transaction History
                  </h6>
                </div>
                <div className="card-body">
                  {/* Hiển thị dữ liệu giao dịch */}
                  <GetHistoryTransaction />
                </div>
              </div>
            </div>
          </div>
          
          <Footer>Copyright &copy; LiTie'stonerl 2024</Footer>
        </div>
      </div>
    </div>
  );
};

export default HistoryTransaction;
