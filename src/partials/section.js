import React from "react";
import PropTypes from "prop-types";

// Section
export default class Section extends React.Component {
  render() {
    const { accent, children, hero, index, title } = this.props;
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
          <figure className={`section__hero section__hero--${accent}`}>
            <img src={hero} />
          </figure>
          {children}
        </div>
      </article>
    );
  }
}

Section.propTypes = {
  accent: PropTypes.string,
  children: PropTypes.node,
  hero: PropTypes.string,
  index: PropTypes.number,
  title: PropTypes.string
};
