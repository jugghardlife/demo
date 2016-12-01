import React from "react";

import Son from "./Son"

class Farther extends React.Component{
  render(){
    return(
      <div>
      父亲{this.context.color}
      <Son />
      </div>
    )
  }
}

export default Farther;

Farther.contextTypes = {
  color: React.PropTypes.string
};
