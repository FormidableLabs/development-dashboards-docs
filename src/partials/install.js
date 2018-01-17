import React from "react";
import PropTypes from "prop-types";

// Section
export default class Install extends React.Component {
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

Install.propTypes = {
  accent: PropTypes.string,
  children: PropTypes.node,
  order: PropTypes.number
};
