import React, { useState } from "react";
import Navbar from "../Navigation/Navbar";
import Sidebar from "../Navigation/Sidebar";
import Footer from "../Ui/Footer";
import GetPerfume from "../Services/GetPerfume";
import FileUpload from "../FileUpload";

const ProductManagement = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // Các state để quản lý category và perfume
  const [categories, setCategories] = useState([]);
  const [perfumes, setPerfumes] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [newPerfume, setNewPerfume] = useState("");

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Hàm thêm category
  const handleAddCategory = () => {
    if (newCategory) {
      setCategories([...categories, newCategory]);
      setNewCategory(""); // Reset input
    }
  };

  // Hàm thêm perfume
  const handleAddPerfume = () => {
    if (newPerfume) {
      setPerfumes([...perfumes, newPerfume]);
      setNewPerfume(""); // Reset input
    }
  };

  // Hàm xóa category
  const handleDeleteCategory = (category) => {
    setCategories(categories.filter((item) => item !== category));
  };

  // Hàm xóa perfume
  const handleDeletePerfume = (perfume) => {
    setPerfumes(perfumes.filter((item) => item !== perfume));
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
              <h1 className="mt-4">Quản Lý Sản Phẩm</h1>

              {/* Section thêm category */}
              <div className="row mt-4">
                <div className="col-xl-12">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Thêm Danh Mục Mới
                      </h6>
                    </div>
                    <div className="card-body">
                      <input
                        type="text"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        placeholder="Nhập tên danh mục"
                        className="form-control mb-2"
                      />
                      <button
                        className="btn btn-primary"
                        onClick={handleAddCategory}
                      >
                        Thêm Danh Mục
                      </button>
                      <ul className="mt-3">
                        {categories.map((category, index) => (
                          <li
                            key={index}
                            className="d-flex justify-content-between"
                          >
                            {category}
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleDeleteCategory(category)}
                            >
                              Xóa
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section thêm perfume */}
              <div className="row mt-4">
                <div className="col-xl-12">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Thêm Nước Hoa Mới
                      </h6>
                    </div>
                    <div className="card-body">
                      <input
                        type="text"
                        value={newPerfume}
                        onChange={(e) => setNewPerfume(e.target.value)}
                        placeholder="Nhập tên nước hoa"
                        className="form-control mb-2"
                      />
                      <button
                        className="btn btn-primary"
                        onClick={handleAddPerfume}
                      >
                        Thêm Nước Hoa
                      </button>
                      <ul className="mt-3">
                        {perfumes.map((perfume, index) => (
                          <li
                            key={index}
                            className="d-flex justify-content-between"
                          >
                            {perfume}
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleDeletePerfume(perfume)}
                            >
                              Xóa
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* File Upload Section */}
              <div className="row mt-4">
                <div className="col-xl-12">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Tải Lên Sản Phẩm Mới
                      </h6>
                    </div>
                    <div className="card-body">
                      <FileUpload />
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Data Table Section */}
              <div className="row mt-4">
                <div className="col-xl-12">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Danh Sách Sản Phẩm
                      </h6>
                    </div>
                    <div className="card-body">
                      <GetPerfume />
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

export default ProductManagement;
