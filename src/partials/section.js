import React from "react";
import PropTypes from "prop-types";

// Section
export default class Section extends React.Component {
  render() {
    const { accent, children, title, index } = this.props;
    return (
      <section
        className={`Section pv6 ph2 mb5 bg-light-navy anchor${index + 1}`}
      >
        <div className="center mb0 mt0 mw11">
          <header className="flex flex-row flex-nowrap justify-between align-center">
            <h1 className="subtitle">{title}</h1>
            <span className={`title tracked-mega ${accent}`} aria-hidden="true">
              0{index}
            </span>
          </header>
          <div className="flex flex-row flex-nowrap justify-center align-start">
            {children}
          </div>
        </div>
      </section>
    );
  }
}

Section.propTypes = {
  accent: PropTypes.string,
  children: PropTypes.node,
  index: PropTypes.number,
  title: PropTypes.string
};
