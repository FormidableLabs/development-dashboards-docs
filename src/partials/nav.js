import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

// Section
export default class Nav extends React.Component {
  static propTypes = {
    handleClick: PropTypes.func
  };

  render() {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list__item">
            <Link
              className="nav__link"
              activeClass="active"
              duration={500}
              hashSpy
              smooth
              spy
              to="anchor1"
            >
              Home
            </Link>
          </li>
          <li className="nav__list__item">
            <Link
              className="nav__link"
              activeClass="active"
              duration={500}
              hashSpy
              smooth
              spy
              to="anchor2"
            >
              Webpack
            </Link>
          </li>
          <li className="nav__list__item">
            <Link
              className="nav__link"
              activeClass="active"
              duration={500}
              hashSpy
              smooth
              spy
              to="anchor3"
            >
              Electron
            </Link>
          </li>
          <li className="nav__list__item">
            <Link
              className="nav__link"
              activeClass="active"
              duration={500}
              hashSpy
              smooth
              spy
              to="anchor4"
            >
              InspectPack
            </Link>
          </li>
          <li className="nav__list__item">
            <Link
              className="nav__link"
              activeClass="active"
              duration={500}
              hashSpy
              smooth
              spy
              to="anchor5"
            >
              NodeJs
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
