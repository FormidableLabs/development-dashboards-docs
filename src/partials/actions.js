import React from "react";
import PropTypes from "prop-types";

// Actions
export const Actions = ({
  accent,
  dLink = "#",
  download = true,
  getStarted = true,
  gsLink = "#"
}) => (
  <div className="actions">
    {getStarted && (
      <span className={`actions__frame button--${accent}`}>
        <a href={gsLink} className="actions__button">
          Get Started
        </a>
      </span>
    )}
    {download && (
      <span className={`actions__frame button--${accent}`}>
        <a href={dLink} className="actions__button">
          Download
        </a>
      </span>
    )}
  </div>
);

Actions.propTypes = {
  accent: PropTypes.string,
  dLink: PropTypes.string,
  download: PropTypes.bool,
  getStarted: PropTypes.bool,
  gsLink: PropTypes.string
};
