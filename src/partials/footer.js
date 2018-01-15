import React from "react";
import PropTypes from "prop-types";
// Common
import { Footer } from "formidable-landers";

class VictoryFooter extends React.Component {
  render() {

    return (
      <Footer
        theme="dark"
      />
    );
  }
}

VictoryFooter.propTypes = {
  home: PropTypes.bool
};

VictoryFooter.defaultProps = {
  home: false
};


export default VictoryFooter;
