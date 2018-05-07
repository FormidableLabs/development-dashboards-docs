import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Header, Footer } from "formidable-landers";

import config from "../../data/site-config";
import FORMIDABLELOGO from "../assets/formidable.svg";

// Fix https://github.com/gatsbyjs/gatsby/issues/1086#issuecomment-324605081
if (
  process.env.NODE_ENV === "development" ||
  (process.env.NODE_ENV === "production" && process.browser !== true)
) {
  require("../styles/styles.css");
}

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Helmet>
          <title>{config.siteTitle}</title>
        </Helmet>
        <Header />
        {children()}
        <Footer theme="light" className="footer" styleContainer="footer" />
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
