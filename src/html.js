import React, { Component } from "react";
import PropTypes from "prop-types";
import { withPrefix } from "gatsby-link";

import WOFF_LAZER84 from "./assets/fonts/lazer84.woff";
import WOFF2_LAZER84 from "./assets/fonts/lazer84.woff2";
import WOFF_EXO2 from "./assets/fonts/exo2.woff";
import WOFF2_EXO2 from "./assets/fonts/exo2.woff2";
import IMAGE_BG_SPACE from "./assets/bg-space.jpg";

let stylesStr;
if (process.env.NODE_ENV === "production") {
  try {
    // eslint-disable-next-line import/no-webpack-loader-syntax
    stylesStr = require("!raw-loader!../public/styles.css");
  } catch (e) {
    console.log(e); // eslint-disable-line no-console
  }
}

class HTML extends Component {
  render() {
    let css;
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }
    return (
      <html lang="en" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <link
            rel="shortcut icon"
            href={withPrefix("/favicons/favicon.ico")}
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href={withPrefix("/favicons/apple-touch-icon.png")}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={withPrefix("/favicons/apple-touch-icon.png")}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={withPrefix("/favicons/favicon-32x32.png")}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={withPrefix("/favicons/favicon-16x16.png")}
          />
          <link
            rel="manifest"
            href={withPrefix("/favicons/site.webmanifest")}
          />
          <link
            rel="mask-icon"
            href={withPrefix("/favicons/safari-pinned-tab.svg")}
            color="#f038b3"
          />
          <meta name="msapplication-TileColor" content="#f038b3" />
          <meta name="theme-color" content="#ffffff" />

          {/* Fonts */}
          <link rel="preload" href={WOFF_LAZER84} as="font" />
          <link rel="preload" href={WOFF2_LAZER84} as="font" />
          <link rel="preload" href={WOFF_EXO2} as="font" />
          <link rel="preload" href={WOFF2_EXO2} as="font" />
          <link
            preload
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
            rel="stylesheet"
          />
          {/* Preload hero image */}
          <link
            rel="preload"
            href={IMAGE_BG_SPACE}
            as="image"
            type="image/png"
          />
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={"body"}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  body: PropTypes.string,
  bodyAttributes: PropTypes.any,
  headComponents: PropTypes.array,
  htmlAttributes: PropTypes.any,
  postBodyComponents: PropTypes.any,
  preBodyComponents: PropTypes.any
};

module.exports = HTML;
