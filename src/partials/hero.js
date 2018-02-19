import React, { Component } from "react";
import PropTypes from "prop-types";

export const Hero = ({}) => (
  <section className="hero">
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
        <a className="button" href="#">
          View Options
        </a>
      </div>
    </div>
  </section>
);

Hero.propTypes = {};
