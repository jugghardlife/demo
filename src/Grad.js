import React from "react";

import Farther from "./Farther";

class Grad extends React.Component{
  getChildContext() {
   return {color: "purple"};
  }
  render(){
    return(
      <div>
        爷爷
        <Farther />
      </div>
    )
  }
}

export default Grad;

Grad.childContextTypes = {
  color: React.PropTypes.string
};
