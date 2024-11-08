import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from './Layouts/AuthLayout';

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header">
                <h3 className="text-center font-weight-light my-4">Đặt lại mật khẩu</h3>
              </div>
              <div className="card-body">
                <div className="small mb-3 text-muted">
                  Nhập địa chỉ email của bạn và chúng tôi sẽ gửi liên kết về email để khôi phục mật khẩu cho bạn.
                </div>
                <form>
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
                  <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                    <Link className="small" to="/login">Quay về đăng nhập</Link>
                    <button type="submit" className="btn btn-primary">
                      ĐẶT LẠI MẬT KHẨU
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center py-3">
                <div className="small">
                  <Link to="/register">Cần tài khoản quản trị viên? Đăng ký!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
