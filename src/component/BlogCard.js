import React from "react";
import {Link} from "react-router";
import RaisedButton from 'material-ui/RaisedButton';

class BlogCard extends React.Component{
  render(){
    const style = {
      margin: 12,

    };
    return(
      <div className="blog-card">
        <div className="blog-index"><p>{this.props.index}</p></div>
        <div className="blog-content clearfix" >
          <h3>{this.props.title}</h3>
          <p>{this.props.desc}</p>
          <RaisedButton label="更多" primary={true}
            style={style} buttonStyle={{backgroundColor:"#246f73"}}
            href={`#/item/${this.props.url}`}/>
        </div>
      </div>
    )
  }
}

BlogCard.defaultProps={
  index:1,
  title:"我是默认的标题",
  desc:"我是默认介绍"
}

BlogCard.propTypes={
  index:React.PropTypes.number,
  title:React.PropTypes.string,
  desc:React.PropTypes.string
}

export default BlogCard;
