import React from "react";
import PropTypes from "prop-types";

// Section
export default class Section extends React.Component {
  render() {
    const { accent, children, hero, title, index } = this.props;
    return (
      <section className={`section anchor${index + 1}`}>
        <div className="section__container">
          <header className="section__header">
            <h1 className="subtitle">{title}</h1>
            <span
              className={`title section__header__title ${accent}`}
              aria-hidden="true"
            >
              0{index}
            </span>
          </header>
          <figure className={`section__figure border--${accent}`}>
            <img className="section__figure__img" src={hero} alt="" />
          </figure>
          <div className="section__content">{children}</div>
        </div>
      </section>
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
