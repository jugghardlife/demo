import React from "react";

class Son extends React.Component{
  render(){
    return(
      <div>
        儿子{this.context.color}
      </div>
    )
  }
}

export default Son;

Son.contextTypes = {
  color: React.PropTypes.string
};
