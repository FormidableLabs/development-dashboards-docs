import React, { Component } from "react";
import { Link } from "react-scroll";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero anchor1">
        <div className="hero__content">
          <div className="hero__header">
            <div className="hero__header__content">
              <h1 className="title hero__title">Development Dashboards</h1>
              <h2 className="subtitle hero__subtitle">
                by Formidable Open Source
              </h2>
            </div>
            <div className="hero__header--edges" />
          </div>
          <div className="hero__footer">
            <div className="hero__footer__decor" />
            <div className="hero__footer__button">
              <Link
                activeClass="is-active"
                className="subtitle hero__button"
                duration={500}
                hashSpy
                smooth
                spy
                to="anchor2"
              >
                View Options
              </Link>
            </div>
            <div className="hero__footer__decor" />
          </div>
        </div>
      </div>
    );
  }
}
