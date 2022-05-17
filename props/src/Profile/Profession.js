import React from 'react';
import PropTypes from "prop-types";
function Profession  (props) {
    
    return (
        <div>
        <p>I'm emna {props.text} </p>
       <p>Esprit Student </p>
      </div>
    );
};

  
  Profession.defaultProps = {
    text: ''
  };
  Profession.propTypes = {
    text: PropTypes.string
  };
export default Profession;