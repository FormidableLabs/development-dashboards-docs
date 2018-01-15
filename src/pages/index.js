import React from "react";
import Link from "gatsby-link";

// Home page
export default class Index extends React.Component {
  render() {
    return (
      <section>
        <h1>Development Dashboards</h1>
        <h2>by Formidable Open Source</h2>
        <ol>
          <li>
            <Link to="/webpack-dashboard/">Webpack Dashboard</Link>
          </li>
          <li>Webpack Electron Dashboard</li>
          <li>InspectPack</li>
          <li>Nodejs Dashboard</li>
        </ol>
      </section>
    );
  }
}
