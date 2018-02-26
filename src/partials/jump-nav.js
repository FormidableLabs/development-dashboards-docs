import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

export const JumpNav = () => (
  <nav className="jump-nav">
    <ul>
      <li>
        <Link
          activeClass="active"
          duration={500}
          hashSpy={true}
          smooth={true}
          spy={true}
          to="anchor1"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          duration={500}
          hashSpy={true}
          smooth={true}
          spy={true}
          to="anchor2"
        >
          Webpack
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          duration={500}
          hashSpy={true}
          smooth={true}
          spy={true}
          to="anchor3"
        >
          Electron
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          duration={500}
          hashSpy={true}
          smooth={true}
          spy={true}
          to="anchor4"
        >
          InspectPack
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          duration={500}
          hashSpy={true}
          smooth={true}
          spy={true}
          to="anchor5"
        >
          NodeJs
        </Link>
      </li>
    </ul>
  </nav>
);

JumpNav.propTypes = {
  handleClick: PropTypes.func
};
