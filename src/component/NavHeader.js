import React from "react";


class NavHeader extends React.Component{

  handleBack(){
    this.context.router.goBack();
  }
  render(){
    return(
      <div className="nav-header">
        <button type="button" onClick={this.handleBack.bind(this)} className="btn btn-default" aria-label="Left Align">
          <span className="glyphicon glyphicon-fast-backward" aria-hidden="true"></span>
        </button>
        <h3>Jugghardlife@{this.props.title}</h3>
        <button type="button" className="btn btn-default" aria-label="Left Align">
          <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
        </button>
      </div>
    )
  }
}

NavHeader.contextTypes = {
  router: React.PropTypes.object
};

export default NavHeader;

//在router引用的context中的对象，在import  react后就自动引进来context对象
