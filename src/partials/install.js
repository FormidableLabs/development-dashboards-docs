import React from "react";
import PropTypes from "prop-types";

// Section
export default class Install extends React.Component {
  render() {
    const { accent, children, order } = this.props;
    return (
      <div className={`code-frame order-${order}`}>
        <code className={`border--${accent} code`}>{children}</code>
      </div>
    );
  }
}

Install.propTypes = {
  accent: PropTypes.string,
  children: PropTypes.node,
  order: PropTypes.number
};
