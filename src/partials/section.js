import React from "react";
import PropTypes from "prop-types";

// Section
export default class Section extends React.Component {
  render() {
    const { accent, children, title, index } = this.props;
    return (
      <article className="section">
        <div className="section-content">
          <header>
            <h1 className="heading--b section__title">{title}</h1>
            <p
              className={`text-xl section__number ${accent}`}
              aria-hidden="true"
            >
              0{index}
            </p>
          </header>
          <div>{children}</div>
        </div>
      </article>
    );
  }
}

Section.propTypes = {
  accent: PropTypes.string,
  children: PropTypes.node,
  index: PropTypes.number,
  title: PropTypes.string
};
