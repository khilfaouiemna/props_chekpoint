import React from "react";
import PropTypes from "prop-types";
export default function FullName(props) {
 
  const styleName={fontSize:"16px",marginBottom: "20px",color:"red"}
    return (
      <div  style={styleName} >
        {props.children}
        <h1> {props.name}</h1>
      </div>
    );
  }
  
  
  FullName.defaultProps = {
    name: 'Default'
  };
  FullName.propTypes = {
    name: PropTypes.string
   };
 