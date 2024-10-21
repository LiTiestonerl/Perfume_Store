import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Card from "./Card";
import CustomChart from "./Chart";
import DataTableComponent from "./DataTable";
import Footer from "./Footer";
import FileUpload from "./FileUpload";

const Index = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const cardData = [
    {
      title: "Total Sales",
      className: "bg-warning text-white",
      link: "#",
      icon: "fa-chart-line",
    },
    {
      title: "Total Orders",
      className: "bg-secondary text-white",
      link: "#",
      icon: "fa-shopping-cart",
    },
    {
      title: "Available Products",
      className: "bg-success text-white",
      link: "#",
      icon: "fa-box",
    },
    {
      title: "Total Customers",
      className: "bg-danger text-white",
      link: "#",
      icon: "fa-users",
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

  const dataTableData = [
    {
      name: "Rose Fragrance",
      category: "Floral",
      stock: 50,
      price: "$45",
      releaseDate: "2022-01-10",
      rating: "4.5/5",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Citrus Splash",
      category: "Citrus",
      stock: 30,
      price: "$55",
      releaseDate: "2021-11-20",
      rating: "4.7/5",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Vanilla Dream",
      category: "Sweet",
      stock: 20,
      price: "$60",
      releaseDate: "2021-05-15",
      rating: "4.8/5",
      image: "https://via.placeholder.com/100",
    },
  ];

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
              <div className="row">
                {cardData.map((card, index) => (
                  <div className="col-xl-3 col-md-6 mb-4" key={index}>
                    <Card
                      title={card.title}
                      className={card.className}
                      link={card.link}
                    />
                  </div>
                ))}
              </div>
              {/* Phần upload file */}
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
              {/* Data Table Section */}
              <div className="row">
                <div className="col-xl-12">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Product Inventory
                      </h6>
                    </div>
                    <div className="card-body">
                      <DataTableComponent data={dataTableData} />
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
