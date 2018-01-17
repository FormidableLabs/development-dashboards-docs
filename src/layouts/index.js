import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import FontFaceObserver from "fontfaceobserver";

import { Footer } from "formidable-landers";
import config from "../../data/site-config";
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
        <header className="bg-navy white">Formidable</header>
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
