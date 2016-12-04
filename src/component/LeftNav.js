import React from "react";
import {Link} from "react-router";

class LeftNav extends React.Component{
  render(){
    return(
      <div className="leftnav-wrap">
        <h3>Jugghardlife@{this.props.title}</h3>
        <div className="leftnav-link">
          <Link to="/" activeStyle={{backgroundColor:"rgba(0,0,0,0.4)"}} onlyActiveOnIndex="true">Home</Link>
          <Link to="blog" activeStyle={{backgroundColor:"rgba(0,0,0,0.4)"}}>Blog</Link>
          <Link to="work" activeStyle={{backgroundColor:"rgba(0,0,0,0.4)"}}>Work</Link>
          <Link to="about" activeStyle={{backgroundColor:"rgba(0,0,0,0.4)"}}>About</Link>
        </div>
      </div>
    )
  }
}

export default LeftNav;
