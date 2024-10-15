import React from "react";

const Navbar = () => (
  <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <a className="navbar-brand ps-3" href="/">
      Perfume Store
    </a>
    <button
      className="btn btn-link"
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
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          <i className="fas fa-user fa-fw"></i>
        </a>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <a className="dropdown-item" href="#!">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#!">
              Activity Log
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="/Login">
              Logout
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
);

export default Navbar;
