import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
// import {QUERY_ME} from '../../utils/queries'
import "./style.css";

const Header = () => {
  // const { data: userData } = useQuery(QUERY_ME);
  const userData = 1;

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse nav-fill w-100" id="navbarNav">
          <ul className="navbar-nav nav-fill w-100">
            <li className="nav-item">
              <Link to="/">
                <h3 id="nav-text">HOME</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menu">
                <h3 id="nav-text">MENU</h3>
              </Link>
            </li>
            <li className="nav-item">
              <a href="/#about">
                <h3 id="nav-text">ABOUT</h3>
              </a>
            </li>
            <li className="nav-item">
              <a href="/#contact">
                <h3 id="nav-text">CONTACT</h3>
              </a>
            </li>
            {Auth.loggedIn() && userData ? (
              <>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle nav-item"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {/* {userData.me.username} */}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/orderhistory" id="dropdown-text">
                        ORDER HISTORY
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={logout} id="dropdown-text">
                        LOGOUT
                      </Link>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login">
                    <h3 id="nav-text">LOGIN</h3>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
