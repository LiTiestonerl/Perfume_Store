import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from './AuthLayout';

const Register = () => {
  return (
    <AuthLayout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header">
                <h3 className="text-center font-weight-light my-4">Tạo tài khoản quản trị viên</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="form-floating mb-3 mb-md-0">
                        <input
                          className="form-control"
                          id="inputFirstName"
                          type="text"
                          placeholder="Enter your first name"
                          required
                        />
                        <label htmlFor="inputFirstName">Tên của bạn</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          className="form-control"
                          id="inputLastName"
                          type="text"
                          placeholder="Enter your last name"
                          required
                        />
                        <label htmlFor="inputLastName">Họ và tên đệm của bạn</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="inputEmail"
                      type="email"
                      placeholder="name@example.com"
                      required
                    />
                    <label htmlFor="inputEmail">Địa chỉ email</label>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="form-floating mb-3 mb-md-0">
                        <input
                          className="form-control"
                          id="inputPassword"
                          type="password"
                          placeholder="Create a password"
                          required
                        />
                        <label htmlFor="inputPassword">Nhập mật khẩu</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3 mb-md-0">
                        <input
                          className="form-control"
                          id="inputPasswordConfirm"
                          type="password"
                          placeholder="Confirm password"
                          required
                        />
                        <label htmlFor="inputPasswordConfirm">Nhập xác nhận mật khẩu</label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 mb-0">
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary btn-block">
                        TẠO TÀI KHOẢN
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center py-3">
                <div className="small">
                  <Link to="/login">Bạn có tài khoản quản trị viên? Quay về đăng nhập!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
