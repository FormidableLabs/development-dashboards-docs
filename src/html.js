import React, { Component } from "react";
import PropTypes from "prop-types";
import favicon from "../static/logos/favicon.ico";
import lazer84woff from "../static/fonts/lazer84.woff";
import lazer84woff2 from "../static/fonts/lazer84.woff2";

let stylesStr;

if (process.env.NODE_ENV === "production") {
  try {
    // eslint-disable-next-line import/no-webpack-loader-syntax
    inlinedStyles = require("!raw-loader!../public/styles.css");
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
          <link rel="shortcut icon" href={favicon} />
          {/* Fonts */}
          <link rel="preload" href={lazer84woff} as="font" />
          <link rel="preload" href={lazer84woff2} as="font" />
          <link
            preload
            href="https://fonts.googleapis.com/css?family=Exo:400,400i|Montserrat:400,700"
            rel="stylesheet"
          />
          {/* Preload hero image */}
          <link
            rel="preload"
            href="./static/bg-space.png"
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
