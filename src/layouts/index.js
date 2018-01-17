import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import FontFaceObserver from "fontfaceobserver";

import { Footer } from "formidable-landers";
import config from "../../data/site-config";
import FORMIDABLELOGO from "../../static/logos/formidable.svg";
import "../styles/styles.css";

class Layout extends React.Component {
  componentDidMount() {
    // "Flash of Faux Text": Add class to body once font is loaded
    const lazer84Observer = new FontFaceObserver("Lazer84", {
      style: "italic"
    });
    const montserratObserver = new FontFaceObserver("Montserrat");
    const exoObserver = new FontFaceObserver("Exo");

    lazer84Observer
      .load()
      .then(() => {
        document.documentElement.classList.add("lazer84-active");
      })
      .catch((err) => {
        /* eslint no-console: "off"*/
        console.warn("lazer84 failed to load.", err);
      });

    montserratObserver
      .load()
      .then(() => {
        document.documentElement.classList.add("montserrat-active");
      })
      .catch((err) => {
        /* eslint no-console: "off"*/
        console.warn("montserrat failed to load.", err);
      });

    exoObserver
      .load()
      .then(() => {
        document.documentElement.classList.add("exo-active");
      })
      .catch((err) => {
        /* eslint no-console: "off"*/
        console.warn("exo failed to load.", err);
      });
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <header className="Layout-Header bg-navy white pa5">
          <a href="https://formidable.com">
            <span dangerouslySetInnerHTML={{ __html: FORMIDABLELOGO }} />
          </a>
        </header>
        {children()}
        <Footer theme="light" />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.any,
  history: PropTypes.any,
  location: PropTypes.object
};

export default Layout;
