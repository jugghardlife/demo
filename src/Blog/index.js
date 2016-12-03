import React from "react";

import BlogCard from "../component/BlogCard";
let data=[
  {index:1,title:"hello",desc:"world"},
  {index:1,title:"hello",desc:"world"},
  {index:1,title:"hello",desc:"world"},
  {index:1,title:"hello",desc:"world"},
  {index:1,title:"hello",desc:"world"},
  {index:1,title:"hello",desc:"world"},
  {index:1,title:"hello",desc:"world"}
]

class Blog extends React.Component{
  render(){
    let cards= data.map((item,i) => <BlogCard {...item} key={i} />)
    return(
      <div className="blog-wrap">
        {cards}
      </div>
    )
  }
}

export default Blog;
