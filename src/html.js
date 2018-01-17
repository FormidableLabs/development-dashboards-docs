import React, { Component } from "react";
import PropTypes from "prop-types";
import favicon from "../static/logos/favicon.ico";
import lazer84woff from "../static/fonts/lazer84.woff";
import lazer84woff2 from "../static/fonts/lazer84.woff2";

let stylesStr;
if (process.env.NODE_ENV === "production") {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    stylesStr = require("!raw-loader!../public/styles.css");
  } catch (e) {
    /* eslint no-console: "off"*/
    console.warn(e);
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
      <html {...this.props.htmlAttributes}>
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
          {/* Preload hero image <link rel="preload" href="article-lead-sm.jpg" as="image" type="image/jpeg" media="only screen and (max-width: 48rem)"> */}
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
