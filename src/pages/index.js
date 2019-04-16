import React from "react";
import Section from "../partials/section";
import Install from "../partials/install";
import Nav from "../partials/nav";
import Hero from "../partials/hero";
// Images
import IMAGE_WEBPACK from "../assets/product_webpack.png";
import IMAGE_INSPECTPACK from "../assets/product_inspectpack.png";

// Home page
export default class Index extends React.Component {
  render() {
    return (
      <main>
        <Nav />
        <Hero />
        <Section
          title="Webpack Dashboard"
          accent="pink"
          index={1}
          image={IMAGE_WEBPACK}
          github="https://github.com/FormidableLabs/webpack-dashboard"
        >
          <p className="para order-2">
            A CLI dashboard for your webpack-dev-server, webpack-dashboard
            analyzes your production bundles and provides data on your module
            sizes, asset sizes, and more, right in your terminal.
          </p>
          <Install accent="pink" order={1}>
            npm install webpack-dashboard --save-dev
          </Install>
        </Section>
        <Section
          title="InspectPack"
          accent="orange"
          index={2}
          image={IMAGE_INSPECTPACK}
          github="https://github.com/FormidableLabs/inspectpack"
        >
          <p className="para">
            inspectpack is an inspection tool for webpack JavaScript bundles
            that gives you insight into your production bundles to help
            determine where you can cut down on size, duplicates, and more. If
            you don’t need a dashboard, inspectpack provides you with the raw
            power tools behind webpack-dashboard and electron-webpack-dashboard.
          </p>
          <Install accent="orange">npm install -g inspectpack</Install>
        </Section>
      </main>
    );
  }
}
