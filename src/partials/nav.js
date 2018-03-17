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
              <span className="clip">Home</span>
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
              <span className="clip">Webpack</span>
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
              <span className="clip">Electron</span>
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
              <span className="clip">InspectPack</span>
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
              <span className="clip">NodeJs</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
