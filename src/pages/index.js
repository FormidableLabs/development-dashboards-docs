import Install from "../partials/install";
import { JumpNav } from "../partials/jump-nav";
import React, { Component } from "react";
import Section from "../partials/section";
import WPDashImg from "../../static/img/product_webpack-dashboard.png";
import WPEDashImg from "../../static/img/product_webpack-electron-dashboard.jpg";
import InspectPackImg from "../../static/img/product_inspectpack.jpg";
import NodeDashImg from "../../static/img/product_nodejs-dashboard.png";
import smoothScroll from "smoothscroll";
import { Actions } from "../partials/actions";
import { CtaFooter } from "../partials/cta-footer";
import { Hero } from "../partials/hero";

// Home page
export default class Index extends Component {
  render() {
    return (
      <main>
        <JumpNav />
        <Hero handleJumpClick={e => this.handleJumpClick(e, "2")} />
        <Section
          accent="pink"
          destination="anchor2"
          hero={WPDashImg}
          index={1}
          title="Webpack Dashboard"
        >
          <div className="section__content">
            <p className="text-body section__copy section__copy--pink section__copy--right">
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
        <Section
          accent="orange"
          destination="anchor3"
          hero={WPEDashImg}
          index={2}
          title="Webpack Electron Dashboard"
        >
          <div className="section__content">
            <p className="text-body section__copy section__copy--orange section__copy--left">
              electron-webpack-dashboard, an Electron desktop GUI, enhances
              webpack-dashboard with slick visualizations and improved readouts.
              No need to configure your terminal- just download, drop a couple
              of snippets into your build, and you’re ready to go.
            </p>
            <button className="section__button">
              <span>download now</span>
            </button>
          </div>
          <Actions accent="orange" dLink="#" download getStarted gsLink="#" />
        </Section>
        <Section
          accent="yellow"
          destination="anchor4"
          hero={InspectPackImg}
          index={3}
          title="InspectPack"
        >
          <div className="section__content">
            <p className="text-body section__copy section__copy--yellow section__copy--right">
              inspectpack is an inspection tool for webpack JavaScript bundles
              that gives you insight into your production bundles to help
              determine where you can cut down on size, duplicates, and more. If
              you don’t need a dashboard, inspectpack provides you with the raw
              power tools behind webpack-dashboard and
              electron-webpack-dashboard.
            </p>
            <Install accent="yellow" order={1}>
              npm install -g inspectpack
            </Install>
          </div>
          <Actions accent="yellow" dLink="#" download getStarted gsLink="#" />
        </Section>
        <Section
          accent="green"
          destination="anchor5"
          hero={NodeDashImg}
          index={4}
          title="NodeJS Dashboard"
        >
          <div className="section__content">
            <p className="text-body section__copy section__copy--green section__copy--left">
              A telemetry dashboard for Node.js apps that runs in real time to
              show you what’s happening inside your Node.js process, right in
              your terminal. No need to instrument code to get the details.
            </p>
            <Install accent="green">npm i -g nodejs-dashboard</Install>
          </div>
          <Actions accent="green" dLink="#" download getStarted gsLink="#" />
        </Section>
        <CtaFooter />
      </main>
    );
  }
}
