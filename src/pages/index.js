import React from "react";
import Section from "../partials/section";
import Install from "../partials/install";
import Nav from "../partials/nav";
import Hero from "../partials/hero";
// Images
import IMAGE_WEBPACK from "../assets/product_webpack.png";
import IMAGE_NODE_JS from "../assets/product_nodejs.png";
import IMAGE_INSPECTPACK from "../assets/product_inspectpack.jpg";
import IMAGE_WEBPACK_ELECTRON from "../assets/product_webpackelectron.jpg";

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
          title="Webpack Electron Dashboard"
          accent="orange"
          index={2}
          image={IMAGE_WEBPACK_ELECTRON}
          github="https://github.com/FormidableLabs/electron-webpack-dashboard"
        >
          <p className="para">
            electron-webpack-dashboard, an Electron desktop GUI, enhances
            webpack-dashboard with slick visualizations and improved readouts.
            No need to configure your terminal- just download, drop a couple of
            snippets into your build, and you’re ready to go.
          </p>
          <Install
            accent="orange"
            download="https://github.com/FormidableLabs/electron-webpack-dashboard/releases/latest"
          />
        </Section>
        <Section
          title="InspectPack"
          accent="yellow"
          index={3}
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
          <Install accent="yellow">npm install -g inspectpack</Install>
        </Section>
        <Section
          title="Node.js Dashboard"
          accent="green"
          index={4}
          image={IMAGE_NODE_JS}
          github="https://github.com/FormidableLabs/nodejs-dashboard"
        >
          <p className="para order-2">
            A telemetry dashboard for Node.js apps that runs in real time to
            show you what’s happening inside your Node.js process, right in your
            terminal. No need to instrument code to get the details.
          </p>
          <Install accent="green" order={1}>
            npm install -g nodejs-dashboard
          </Install>
        </Section>
      </main>
    );
  }
}
