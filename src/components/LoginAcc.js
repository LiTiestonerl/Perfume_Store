import React from "react";
import AuthLayout from "./AuthLayout";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <AuthLayout>
      <div class="card shadow-lg border-0 rounded-lg mt-4">
        <div class="card-header">
          <h3 class="text-center font-weight-light my-4">Đăng nhập hệ thống quản trị</h3>
        </div>
        <div class="card-body">
          <form id="loginForm">
            <div class="form-floating mb-3">
              <input
                class="form-control"
                id="inputEmail"
                type="email"
                placeholder="name@example.com"
                required
              />
              <label for="inputEmail">Tên đăng nhập</label>
            </div>
            <div class="form-floating mb-3">
              <input
                class="form-control"
                id="inputPassword"
                type="password"
                placeholder="Password"
                required
              />
              <label for="inputPassword">Mật khẩu</label>
            </div>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                id="inputRememberPassword"
                type="checkbox"
                value=""
              />
              <label class="form-check-label" for="inputRememberPassword">
                Nhớ đăng nhập
              </label>
            </div>
            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
              <Link to="/forgot-password">Quên mật khẩu?</Link>
              <button class="btn btn-primary" type="submit" to="/index">
                ĐĂNG NHẬP
              </button>
            </div>
          </form>
          <div class="text-center my-3">
            <p>Hoặc đăng nhập bằng</p>
            <button
              id="loginButton"
              class="btn btn-danger"
              onClick=""
            >
              <i class="fab fa-google"></i> Đăng nhập qua Google
            </button>
          </div>
        </div>
        <div class="card-footer text-center py-3">
          <div class="small">
            <Link to="/register">Cần tài khoản quản trị viên? Đăng ký!</Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
