import React from "react";
import PropTypes from "prop-types";

// Section
export default class Section extends React.Component {
  render() {
    const { accent, children, destination, hero, index, title } = this.props;
    return (
      <article className={`section ${destination}`}>
        <div className="section-content">
          <header>
            <h1
              className={`heading--b section__title section__title--${accent}`}
            >
              {title}
            </h1>
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
  destination: PropTypes.string,
  hero: PropTypes.string,
  index: PropTypes.number,
  title: PropTypes.string
};
