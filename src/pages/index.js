import React from "react";
import Link from "gatsby-link";

// Home page
export default class Index extends React.Component {
  render() {
    return (
      <main>
        <div className="Hero">
          <h1 className="HeadingA HeadingA--hero">Development Dashboards</h1>
          <h2>by Formidable Open Source</h2>
        </div>
        <ol>
          <li>
            <Link to="/webpack-dashboard/">Webpack Dashboard</Link>
          </li>
          <li>Webpack Electron Dashboard</li>
          <li>InspectPack</li>
          <li>
            <Link to="/nodejs-dashboard/">Nodejs Dashboard</Link>
          </li>
        </ol>
      </main>
    );
  }
}
