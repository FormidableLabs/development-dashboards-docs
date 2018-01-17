import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Footer } from "formidable-landers";
import config from "../../data/site-config";
import "../styles/styles.css";

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children()}
        <Footer />
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.any,
  history: PropTypes.any,
  location: PropTypes.object
};

export default MainLayout;
