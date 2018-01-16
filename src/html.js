/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from "react";
import PropTypes from "prop-types";
import favicon from "../static/logos/favicon.ico";
import lazer84woff from "../static/fonts/lazer84.woff";
import lazer84woff2 from "../static/fonts/lazer84.woff2";

let inlinedStyles = "";
if (process.env.NODE_ENV === "production") {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require("!raw-loader!../public/styles.css");
  } catch (e) {
    /* eslint no-console: "off"*/
    console.log(e);
  }
}

class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      );
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          {this.props.headComponents}

          <link rel="shortcut icon" href={favicon} />

          {css}

          {/* Fonts */}

          <link rel="preload" href={lazer84woff} as="font" />
          <link rel="preload" href={lazer84woff2} as="font" />

          {/* Preload hero image <link rel="preload" href="article-lead-sm.jpg" as="image" type="image/jpeg" media="only screen and (max-width: 48rem)"> */}
        </head>
        <body>
          <div
            id="___gatsby"
            className="root"
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
  headComponents: PropTypes.array,
  postBodyComponents: PropTypes.any
};

export default HTML;
