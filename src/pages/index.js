import React from "react";
import Section from "../partials/section";
import Install from "../partials/install";
import { Hero } from "../partials/hero";
import WPDashImg from "../../static/img/product_webpack-dashboard.jpg";
import { Actions } from "../partials/actions";

// Home page
export default class Index extends React.Component {
  render() {
    return (
      <main>
        <Hero />
        <Section
          title="Webpack Dashboard"
          accent="pink"
          index={1}
          hero={WPDashImg}
        >
          <div className="section__content">
            <p className="text-body section__copy">
              A CLI dashboard for your webpack-dev-server, webpack-dashboard
              analyzes your production bundles and provides data on your module
              sizes, asset sizes, and more, right in your terminal.
            </p>
            <Install accent="pink" order={1}>
              npm i webpack-dashboard --save-dev
            </Install>
          </div>
          <Actions accent="pink" dLink="#" download getStarted gsLink="#" />
        </Section>
        <Section title="Webpack Electron Dashboard" accent="orange" index={2}>
          <div className="section__content">
            <p className="text-body section__copy">
              electron-webpack-dashboard, an Electron desktop GUI, enhances
              webpack-dashboard with slick visualizations and improved readouts.
              No need to configure your terminal- just download, drop a couple
              of snippets into your build, and you’re ready to go.
            </p>
            <div className="ml5">
              <button>download now</button>
            </div>
          </div>
        </Section>
        <Section title="InspectPack" accent="yellow" index={3}>
          <div className="section__content">
            <p className="text-body section__copy">
              inspectpack is an inspection tool for webpack JavaScript bundles
              that gives you insight into your production bundles to help
              determine where you can cut down on size, duplicates, and more. If
              you don’t need a dashboard, inspectpack provides you with the raw
              power tools behind webpack-dashboard and
              electron-webpack-dashboard.
            </p>
            <Install accent="yellow">npm install -g inspectpack</Install>
          </div>
        </Section>
        <Section title="NodeJS Dashboard" accent="green" index={4}>
          <div className="section__content">
            <p className="text-body section__copy">
              A telemetry dashboard for Node.js apps that runs in real time to
              show you what’s happening inside your Node.js process, right in
              your terminal. No need to instrument code to get the details.
            </p>
            <Install accent="green" order={1}>
              npm i -g nodejs-dashboard
            </Install>
          </div>
        </Section>
      </main>
    );
  }
}
