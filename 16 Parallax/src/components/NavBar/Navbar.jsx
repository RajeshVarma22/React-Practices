import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="Navbar" className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Animations</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to={"firstParallax"}
                className="nav-link active"
                aria-current="page"
              >
                Parallax
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Framer Motion
              </a>
              <ul className="dropdown-menu">
                <Link to={"FramerTesting"}>
                  <li className="dropdown-item">FramerTesting</li>
                </Link>
                <Link to={"FramerTesting"}>
                  <li className="dropdown-item">FramerTesting</li>
                </Link>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Page Transformation
              </a>
              <ul className="dropdown-menu">
                <Link to={"PageTransition 1"}>
                  <li className="dropdown-item">PageTransition 1</li>
                </Link>
                <Link to={"PageTransition 2"}>
                  <li className="dropdown-item">PageTransition 2</li>
                </Link>
                <Link to={"PageTransition 3"}>
                  <li className="dropdown-item">PageTransition 3</li>
                </Link>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
