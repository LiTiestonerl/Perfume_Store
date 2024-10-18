import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <Link className="navbar-brand ps-3 me-3" to="/index">
      Perfume Store
    </Link>
    <button
      className="btn btn-link me-3"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#layoutSidenav_nav"
    >
      <i className="fas fa-bars"></i>
    </button>
    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          placeholder="Search for..."
          aria-label="Search for..."
        />
        <button className="btn btn-primary" type="button">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
      <li className="nav-item dropdown">
        <button
          className="nav-link dropdown-toggle btn btn-link"
          type="button"
          id="userDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-user fa-fw"></i>
        </button>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="userDropdown"
        >
          <li>
            <Link className="dropdown-item" to="/settings">
              Settings
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/activity-log">
              Activity Log
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="/login">
              Logout
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
);

export default Navbar;
