// components/Index.js
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Card from "./Card";
import CustomChart from "./Chart";
import DataTableComponent from "./DataTable";
import Footer from "./Footer";

const Index = () => {
  const cardData = [
    { title: "Total Sales", className: "bg-warning", link: "#" },
    { title: "Total Orders", className: "bg-warning", link: "#" },
    { title: "Available Products", className: "bg-success", link: "#" },
    { title: "Total Customers", className: "bg-danger", link: "#" },
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
    },
    {
      name: "Citrus Splash",
      category: "Citrus",
      stock: 30,
      price: "$55",
      releaseDate: "2021-11-20",
      rating: "4.7/5",
    },
    {
      name: "Vanilla Dream",
      category: "Sweet",
      stock: 20,
      price: "$60",
      releaseDate: "2021-05-15",
      rating: "4.8/5",
    },
  ];

  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Dashboard</h1>
              <div className="row">
                {cardData.map((card, index) => (
                  <div className="col-xl-3 col-md-6" key={index}>
                    <Card
                      title={card.title}
                      className={card.className}
                      link={card.link}
                    />
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-xl-6">
                  <CustomChart id="myAreaChart" type="line" data={chartData} />
                </div>
                <div className="col-xl-6">
                  <CustomChart id="myBarChart" type="bar" data={chartData} />
                </div>
              </div>
              <DataTableComponent data={dataTableData} />
            </div>
          </main>
          <Footer>
            &copy; Perfume Store 2024
          </Footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
