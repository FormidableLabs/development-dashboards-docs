import React from "react";
import Section from "../partials/section";
import Install from "../partials/install";
import Nav from "../partials/nav";

// Home page
export default class Index extends React.Component {
  render() {
    return (
      <main>
        <div className="Hero tc bg-navy pv6 ph1 mb5 flex flex-column flex-nowrap justify-center anchor1">
          <div className="Hero-veil ba b--pink" />
          <h1 className="HeadingA HeadingA--hero">Development Dashboards</h1>
          <h2 className="HeadingB">by Formidable Open Source</h2>
        </div>
        <Section title="Webpack Dashboard" accent="pink" index={1}>
          <p className="mw9 order-2">
            A CLI dashboard for your webpack-dev-server, webpack-dashboard
            analyzes your production bundles and provides data on your module
            sizes, asset sizes, and more, right in your terminal.
          </p>
          <Install accent="pink" order={1}>
            npm install webpack-dashboard --save-dev
          </Install>
        </Section>
        <Section title="Webpack Electron Dashboard" accent="orange" index={2}>
          <p className="mw9">
            electron-webpack-dashboard, an Electron desktop GUI, enhances
            webpack-dashboard with slick visualizations and improved readouts.
            No need to configure your terminal- just download, drop a couple of
            snippets into your build, and you’re ready to go.
          </p>
          <div className="ml5">
            <button>download now</button>
          </div>
        </Section>
        <Section title="InspectPack" accent="yellow" index={3}>
          <p className="mw9">
            inspectpack is an inspection tool for webpack JavaScript bundles
            that gives you insight into your production bundles to help
            determine where you can cut down on size, duplicates, and more. If
            you don’t need a dashboard, inspectpack provides you with the raw
            power tools behind webpack-dashboard and electron-webpack-dashboard.
          </p>
          <Install accent="yellow">npm install -g inspectpack</Install>
        </Section>
        <Section title="NodeJS Dashboard" accent="green" index={4}>
          <p className="mw9 order-2">
            A telemetry dashboard for Node.js apps that runs in real time to
            show you what’s happening inside your Node.js process, right in your
            terminal. No need to instrument code to get the details.
          </p>
          <Install accent="green" order={1}>
            npm install -g nodejs-dashboard
          </Install>
        </Section>
        <Nav />
      </main>
    );
  }
}
