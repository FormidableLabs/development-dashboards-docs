import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Footer } from "formidable-landers";
import config from "../../data/site-config";
import "../styles/styles.css";
import FontFaceObserver from "fontfaceobserver";

class Layout extends React.Component {
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

    const lazer84Observer = new FontFaceObserver("Lazer84", {
      style: "italic"
    });
    lazer84Observer.load().then(() => {
      document.documentElement.classList.add("lazer84-active");
    });

    return (
      <div>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <header className="Header">Formidable</header>
        {children()}
        <Footer />
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
