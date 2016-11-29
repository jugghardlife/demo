import React from "react";
import {Link} from "react-router";

class NavFooter extends React.Component{
  render(){
    return(
      <div className="nav-footer">
        <Link to="/" activeStyle={{color: 'red'}} onlyActiveOnIndex={true}>
          <span className="glyphicon glyphicon-home" aria-hidden="true"></span><br/>
          Home
        </Link>
        <Link to="blog" activeStyle={{color: 'red'}} >
          <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span><br/>
          Blog
        </Link>
        <Link to="work" activeStyle={{color: 'red'}} >
          <span className="glyphicon glyphicon-book" aria-hidden="true"></span><br/>
          Work
        </Link>
        <Link to="about" activeStyle={{color: 'red'}} >
          <span className="glyphicon glyphicon-credit-card" aria-hidden="true"></span><br/>
          About
        </Link>
      </div>
    )
  }
}

export default NavFooter;
