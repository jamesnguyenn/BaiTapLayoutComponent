import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar  navbar-expand-lg navbar-dark">
        <div className="container px-lg-5 ">
          <div className="logo">
            <a href="#!" className="navbar-brand">
              Start Bootstrap
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#!">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#!">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#!">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
