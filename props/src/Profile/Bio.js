import React from "react";
import PropTypes from "prop-types";

export default function Bio(props) {
  return (
    <div>
      <p> I'am futur {props.text} </p> 
      <p>Esprit Student</p>
      
    </div>
  );
}


Bio.defaultProps = {
  text: 'Default'
};
Bio.propTypes = {
  text: PropTypes.string
};
