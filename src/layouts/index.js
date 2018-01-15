import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Footer } from "formidable-landers";
import config from "../../data/site-config";
import "../styles/styles.css";

class MainLayout extends React.Component {
  getLocalTitle() {
    const capitalize = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath.includes("docs/")) {
      const doc = currentPath
        .replace("docs/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(doc)}`;
    }
    return title;
  }
  render() {
    const { children } = this.props;

    return (
      <div>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
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
