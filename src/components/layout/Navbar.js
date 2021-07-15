import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-gradient">
      <h1 className="text-dark">
        <i className={icon}> </i> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">
            <span className="text-dark">Home</span>{" "}
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span className="text-dark">About</span>{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
