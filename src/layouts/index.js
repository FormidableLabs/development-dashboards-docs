import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import FontFaceObserver from "fontfaceobserver";
import { Footer } from "formidable-landers";
import config from "../../data/site-config";
import FORMIDABLELOGO from "../../static/logos/formidable.svg";
import "../styles/styles.css";

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <header className="layout-header">
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
