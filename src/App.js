import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/LoginAcc";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import AuthLayout from "./components/Layouts/AuthLayout";
import ErrorPage from "./components/ErrorPage";
import Index from "./components/Index";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/index" element={<Index />} />

          <Route
            path="/401"
            element={
              <AuthLayout>
                <ErrorPage
                  errorCode="401"
                  message="Ooopps.! Bạn không có quyền truy cập trang này!"
                  buttonText="Trở về trang đăng nhập"
                  buttonLink="/"
                />
              </AuthLayout>
            }
          />
          <Route
            path="/404"
            element={
              <AuthLayout>
                <ErrorPage
                  errorCode="404"
                  message="Trang bạn tìm không tồn tại!"
                  buttonText="Trở về trang chủ"
                  buttonLink="/"
                />
              </AuthLayout>
            }
          />
          <Route
            path="/500"
            element={
              <AuthLayout>
                <ErrorPage
                  errorCode="500"
                  message="Đã xảy ra lỗi máy chủ!"
                  buttonText="Trở về trang chủ"
                  buttonLink="/"
                />
              </AuthLayout>
            }
          />
          <Route
            path="*"
            element={
              <AuthLayout>
                <ErrorPage
                  errorCode="404"
                  message="Trang không tồn tại!"
                  buttonText="Trở về trang chủ"
                  buttonLink="/"
                />
              </AuthLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
