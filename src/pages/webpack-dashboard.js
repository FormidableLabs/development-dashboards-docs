import React from "react";
import Link from "gatsby-link";

export default class WebpackDashboardIndex extends React.Component {
  render() {
    return (
      <div>
        <h1>Webpack Dashboard</h1>
        <Link to="/webpack-dashboard/getting-started">Getting Started</Link>
        <Link to="/webpack-dashboard/api">API</Link>
      </div>
    );
  }
}
