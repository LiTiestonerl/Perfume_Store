import React from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

const Sidebar = ({ isOpen }) => (
  <nav className={`sb-sidenav accordion sb-sidenav-dark ${isOpen ? 'open' : 'closed'}`} id="sidenavAccordion">
    <div className="sb-sidenav-menu">
      <Accordion alwaysOpen flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header">Bảng điều khiển</Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            <Link className="nav-link d-flex align-items-center mb-3" to="/dashboard">
              <div className="sb-nav-link-icon me-2">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              Dashboard
            </Link>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="1">
          <Accordion.Header className="custom-accordion-header">Quản Lý</Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            <Link className="nav-link d-flex align-items-center mb-3" to="/products">
              <div className="sb-nav-link-icon me-2">
                <i className="fas fa-box"></i>
              </div>
              Sản phẩm
            </Link>
            <hr className="dropdown-divider" />
            <Link className="nav-link d-flex align-items-center mb-3" to="/orders">
              <div className="sb-nav-link-icon me-2">
                <i className="fas fa-shopping-cart"></i>
              </div>
              Đơn hàng
            </Link>
            <hr className="dropdown-divider" />
            <Link className="nav-link d-flex align-items-center mb-3" to="/customers">
              <div className="sb-nav-link-icon me-2">
                <i className="fas fa-users"></i>
              </div>
              Khách hàng
            </Link>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="2">
          <Accordion.Header className="custom-accordion-header">Báo Cáo</Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            <Link className="nav-link d-flex align-items-center mb-3" to="/reports">
              <div className="sb-nav-link-icon me-2">
                <i className="fas fa-chart-line"></i>
              </div>
              Báo Cáo Bán Hàng
            </Link>
            <hr className="dropdown-divider" />
            <Link className="nav-link d-flex align-items-center mb-3" to="/inventory">
              <div className="sb-nav-link-icon me-2">
                <i className="fas fa-warehouse"></i>
              </div>
              Báo Cáo Tồn Kho
            </Link>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="3">
          <Accordion.Header className="custom-accordion-header">Tiện Ích</Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            <Link className="nav-link d-flex align-items-center mb-3" to="/settings">
              <div className="sb-nav-link-icon me-2">
                <i className="fas fa-cogs"></i>
              </div>
              Thiết Lập
            </Link>
            <hr className="dropdown-divider" />
            <Link className="nav-link d-flex align-items-center mb-3" to="/support">
              <div className="sb-nav-link-icon me-2">
                <i className="fas fa-life-ring"></i>
              </div>
              Hỗ Trợ
            </Link>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
    <hr className="dropdown-divider" />
    <div className="sb-sidenav-footer mt-auto">
      <div className="small">Đăng nhập với tư cách:</div>
      Ngô Minh Tiến
    </div>
  </nav>
);

export default Sidebar;