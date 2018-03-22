import React, { Component } from "react";
import PropTypes from "prop-types";
import lazer84woff from "../static/fonts/lazer84.woff";
import lazer84woff2 from "../static/fonts/lazer84.woff2";
import { siteMetadata } from "../gatsby-config";

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
            href={`${siteMetadata.rssMetadata.site_url}/favicons/favicon.ico`}
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href={`${
              siteMetadata.rssMetadata.site_url
            }/favicons/apple-touch-icon.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${
              siteMetadata.rssMetadata.site_url
            }/favicons/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${
              siteMetadata.rssMetadata.site_url
            }/favicons/favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${
              siteMetadata.rssMetadata.site_url
            }/favicons/favicon-16x16.png`}
          />
          <link
            rel="manifest"
            href={`${
              siteMetadata.rssMetadata.site_url
            }/favicons/site.webmanifest`}
          />
          <link
            rel="mask-icon"
            href={`${
              siteMetadata.rssMetadata.site_url
            }/favicons/safari-pinned-tab.svg`}
            color="#f038b3"
          />
          <meta name="msapplication-TileColor" content="#f038b3" />
          <meta name="theme-color" content="#ffffff" />

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
