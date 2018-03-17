import React from "react";
import PropTypes from "prop-types";

export default class Install extends React.Component {
  static propTypes = {
    accent: PropTypes.string,
    children: PropTypes.node,
    order: PropTypes.number
  };

  render() {
    const { accent, children, order } = this.props;
    return (
      <div className={`m${order ? "r" : "l"}5 order-${order}`}>
        <code className={`dib pa3 ba b--${accent} ws-nowrap bg-black-25`}>
          {children}
        </code>
      </div>
    );
  }
}
