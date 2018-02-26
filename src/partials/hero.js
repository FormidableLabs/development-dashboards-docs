import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import arrowGif from "../../static/img/gif.gif";

export const Hero = () => (
  <section className="hero anchor1">
    <div className="frame">
      <div className="frame__edge1" />
      <div className="frame__edge2" />
      <div className="frame__edge3" />
      <div className="frame__edge4" />
      <div className="frame__dot1" />
      <div className="frame__dot2" />
      <div className="frame__dot4" />
      <div className="frame__dot5" />
      <div className="frame__dot6" />
      <div className="frame__bg">
        <div className="frame__line1" />
        <div className="frame__trapezoid" />
        <h1 className="heading--a hero__title">Development Dashboards</h1>
        <p className="heading--b hero__subtitle">by formidable open source</p>
        <Link
          activeClass="active"
          className="button"
          duration={500}
          hashSpy={true}
          smooth={true}
          spy={true}
          to="anchor2"
        >
          View Options
        </Link>
      </div>
    </div>
    {/* <img src={arrowGif} /> */}
  </section>
);

Hero.propTypes = {
  handleJumpClick: PropTypes.func
};
