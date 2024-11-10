import React, { useState, useRef } from "react";
import Navbar from "./Navigation/Navbar";
import Sidebar from "./Navigation/Sidebar";
import Card from "./Ui/Card";
import CustomChart from "./Charts/Chart";
import Footer from "./Ui/Footer";
import FileUpload from "./FileUpload";
import GetPerfume from "./Services/GetPerfume";
import GetInfoUser from "./Services/GetInfoUser";

const Index = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const perfumeTableRef = useRef(null); // Reference for Perfume Table
  const userTableRef = useRef(null); // Reference for User Table

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleCardClick = (title) => {
    if (title === "Available Products") {
      perfumeTableRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (title === "Total Customers") {
      userTableRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cardData = [
    {
      title: "Total Sales",
      className: "bg-warning text-white",
      icon: "fa-chart-line",
    },
    {
      title: "Total Orders",
      className: "bg-secondary text-white",
      icon: "fa-shopping-cart",
    },
    {
      title: "Available Products",
      className: "bg-success text-white",
      icon: "fa-box",
      onClick: () => handleCardClick("Available Products"),
    },
    {
      title: "Total Customers",
      className: "bg-danger text-white",
      link: "#",
      icon: "fa-users",
      onClick: () => handleCardClick("Total Customers"),
    },
  ];

  const chartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Perfume Sales (units)",
        data: [120, 150, 100, 170, 300],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
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
            marginLeft: isSidebarOpen ? "0px" : "0",
            transition: "margin-left 0.3s ease-in-out",
          }}
        >
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Admin Dashboard</h1>

              {/* Card Section */}
              <div className="row">
                {cardData.map((card, index) => (
                  <div className="col-xl-3 col-md-6 mb-4" key={index}>
                    <Card
                      title={card.title}
                      className={card.className}
                      link={card.link}
                      onClick={card.onClick} // Assign onClick handler for each card
                    />
                  </div>
                ))}
              </div>

              {/* File Upload Section */}
              <div className="row mt-4">
                <div className="col-xl-12">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Upload File (Ảnh sản phẩm mới)
                      </h6>
                    </div>
                    <div className="card-body">
                      <FileUpload />
                    </div>
                  </div>
                </div>
              </div>

              {/* Charts Section */}
              <div className="row">
                <div className="col-xl-6">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Perfume Sales - Line Chart
                      </h6>
                    </div>
                    <div className="card-body">
                      <CustomChart
                        id="myAreaChart"
                        type="line"
                        data={chartData}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Perfume Sales - Bar Chart
                      </h6>
                    </div>
                    <div className="card-body">
                      <CustomChart
                        id="myBarChart"
                        type="bar"
                        data={chartData}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Table Section for Perfumes */}
              <div className="row" ref={perfumeTableRef}>
                <div className="col-xl-12">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Product Inventory - Available Perfumes
                      </h6>
                    </div>
                    <div className="card-body">
                      <GetPerfume />
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Table Section for Users */}
              <div className="row" ref={userTableRef}>
                <div className="col-xl-12">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        User Information - Admin Panel
                      </h6>
                    </div>
                    <div className="card-body">
                      <GetInfoUser />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer>Copyright &copy; LiTie'stonerl 2024</Footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
