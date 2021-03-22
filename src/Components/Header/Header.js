import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      // a thay bằng NavLink, href thay bằng to
      // Sẽ nhanh hơn nhiều vì ko có reload lại page
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
          <NavLink className="navbar-brand" to="/home">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink
                  activeStyle={{ fontWeight: "bold" }}
                  activeClassName="bg-dark text-light"
                  className="nav-link"
                  to="/home"
                >
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{ fontWeight: "bold" }}
                  activeClassName="bg-dark text-light"
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{ fontWeight: "bold" }}
                  activeClassName="bg-dark text-light"
                  className="nav-link"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{ fontWeight: "bold" }}
                  activeClassName="bg-dark text-light"
                  className="nav-link"
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{ fontWeight: "bold" }}
                  activeClassName="bg-dark text-light"
                  className="nav-link"
                  to="/lifecycle"
                >
                  Life Cycle
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <NavLink className="dropdown-item" to="#">
                    Action 1
                  </NavLink>
                  <NavLink className="dropdown-item" to="#">
                    Action 2
                  </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <NavLink className="dropdown-item" to="/usestatedemo">
                    UseState Hook
                  </NavLink>
                  <NavLink className="dropdown-item" to="/useeffecthome">
                    UseEffect Home
                  </NavLink>
                  <NavLink className="dropdown-item" to="/reduxhook">
                    Redux Hook
                  </NavLink>
                </div>
              </li>

              {/* BT chon xe  */}
              <li className="nav-item">
                <NavLink
                  activeStyle={{ fontWeight: "bold" }}
                  activeClassName="bg-dark text-light"
                  className="nav-link"
                  to="/baitapchonxe"
                >
                  BTChonXe
                </NavLink>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
