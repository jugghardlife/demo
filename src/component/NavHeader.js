import React from "react";


class NavHeader extends React.Component{
  render(){
    return(
      <div className="nav-header">
        <button type="button" className="btn btn-default" aria-label="Left Align">
          <span className="glyphicon glyphicon-fast-backward" aria-hidden="true"></span>
        </button>
        <h3>Jugghardlife@Home</h3>
        <button type="button" className="btn btn-default" aria-label="Left Align">
          <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
        </button>
      </div>
    )
  }
}

export default NavHeader;
