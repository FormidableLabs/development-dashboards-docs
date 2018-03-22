import React from "react";
import PropTypes from "prop-types";

export default class Install extends React.Component {
  static propTypes = {
    accent: PropTypes.string,
    children: PropTypes.node,
    download: PropTypes.string,
    order: PropTypes.number
  };

  static defaultProps = {
    order: 2
  };

  render() {
    const { accent, children, download, order } = this.props;
    if (download) {
      return (
        <div className={`install border--${accent} order-${order}`}>
          <a
            className={`subtitle button button--${accent}`}
            href={download}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Now
          </a>
        </div>
      );
    }
    return (
      <div className={`install border--${accent} order-${order}`}>
        <code className={`install__code border--${accent}`}>{children}</code>
      </div>
    );
  }
}
