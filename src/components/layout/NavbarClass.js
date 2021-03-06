import React, { Component } from "react";
import PropTypes from "prop-types";

export class NavbarClass extends Component {
  static defaultProps = {
    title: "Github Fineder",
    icon: "fab fa-github",
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon}> </i> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default NavbarClass;
