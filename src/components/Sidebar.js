import React from "react";

const Sidebar = () => (
  <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
    <div className="sb-sidenav-menu">
      <div className="nav">
        <div className="sb-sidenav-menu-heading">Tổng Quan</div>
        <a className="nav-link" href="/">
          <div className="sb-nav-link-icon">
            <i className="fas fa-tachometer-alt"></i>
          </div>
          Dashboard
        </a>
        <div className="sb-sidenav-menu-heading">Quản Lý</div>
        <a className="nav-link" href="/">
          <div className="sb-nav-link-icon">
            <i className="fas fa-tachometer-alt"></i>
          </div>
          Sản phẩm
        </a>
        <a className="nav-link" href="/">
          <div className="sb-nav-link-icon">
            <i className="fas fa-tachometer-alt"></i>
          </div>
          Đơn hàng
        </a>
        <div className="sb-sidenav-menu-heading">Báo Cáo</div>
        <div className="sb-sidenav-menu-heading">Tiện Ích</div>
      </div>
    </div>
    <div className="sb-sidenav-footer">
      <div className="small">Đăng nhập với tư cách:</div>
      Ngô Minh Tiến
    </div>
  </nav>
);

export default Sidebar;
