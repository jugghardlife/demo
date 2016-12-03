import React from "react";

class Item extends React.Component{
  render(){
    let content = this.props.params.url==0?"这是第一个页面":
    this.props.params.url==1?"这是第二个页面":
    this.props.params.url==2?"这是第三个页面":
    this.props.params.url==3?"这是第四个页面":
    "这是第N个页面"
    return(
      <div>
        {content}
      </div>
    )
  }
}

export default Item;
