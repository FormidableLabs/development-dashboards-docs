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
      <div
        className={`install install--${
          order ? "left" : "right"
        } order-${order}`}
      >
        <code className={`install__code border--${accent}`}>{children}</code>
      </div>
    );
  }
}
