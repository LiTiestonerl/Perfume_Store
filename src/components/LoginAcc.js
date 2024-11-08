import React from "react";
import AuthLayout from "./Layouts/AuthLayout";
import { Link } from "react-router-dom";
import { handleGoogleSignIn } from "./Services/HandleGoogleSignIn"; // Import hàm từ HandleGoogleSignIn.js

const Login = () => {
  return (
    <AuthLayout>
      <div className="card shadow-lg border-0 rounded-lg mt-4">
        <div className="card-header">
          <h3 className="text-center font-weight-light my-4">
            Đăng nhập hệ thống quản trị
          </h3>
        </div>
        <div className="card-body">
          <form id="loginForm">
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="inputEmail"
                type="email"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="inputEmail">Tên đăng nhập</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="inputPassword"
                type="password"
                placeholder="Password"
                required
              />
              <label htmlFor="inputPassword">Mật khẩu</label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                id="inputRememberPassword"
                type="checkbox"
                value=""
              />
              <label
                className="form-check-label"
                htmlFor="inputRememberPassword"
              >
                Nhớ đăng nhập
              </label>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
              <Link to="/forgot-password">Quên mật khẩu?</Link>
              <button className="btn btn-primary" type="submit">
                ĐĂNG NHẬP
              </button>
            </div>
          </form>
          <div className="text-center my-3">
            <p>Hoặc đăng nhập bằng</p>
            <button
              id="loginButton"
              className="btn btn-danger"
              onClick={handleGoogleSignIn} // Gọi hàm khi nhấn nút
            >
              <i className="fab fa-google"></i> Đăng nhập qua Google
            </button>
          </div>
        </div>
        <div className="card-footer text-center py-3">
          <div className="small">
            <Link to="/register">Cần tài khoản quản trị viên? Đăng ký!</Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
