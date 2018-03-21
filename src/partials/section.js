import React from "react";
import PropTypes from "prop-types";

// Section
export default class Section extends React.Component {
  static propTypes = {
    accent: PropTypes.string,
    children: PropTypes.node,
    github: PropTypes.string,
    image: PropTypes.string,
    index: PropTypes.number,
    title: PropTypes.string
  };

  render() {
    const { accent, children, github, image, title, index } = this.props;
    return (
      <section className={`section anchor${index + 1}`}>
        <div className="section__container">
          <header className={`section__header section__header--${accent}`}>
            <h1 className="subtitle section__header__subtitle">{title}</h1>
            <span
              className={`title section__header__title ${accent}`}
              aria-hidden="true"
            >
              0{index}
            </span>
          </header>
          {image && (
            <figure className={`section__figure border--${accent}`}>
              <img className="section__figure__img" src={image} alt="" />
            </figure>
          )}
          <div className="section__content">{children}</div>
        </div>
        {github && <a href={github}>github</a>}
      </section>
    );
  }
}
