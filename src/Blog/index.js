import React from "react";
import axios from "axios";
import BlogCard from "../component/BlogCard";
import Loading from "../component/Loading";

class Blog extends React.Component{
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    axios.get("https://raw.githubusercontent.com/jugghardlife/demo/master/data/blogcard.json?aa="+Math.random())
    .then(res=>this.setState({data:res.data,wait:false}))
  }
  render(){
    return(
      <div className="blog-wrap">
      <h2 className="blog-title">笔记</h2>
      {this.state.wait?<Loading />:this.state.data.map((item,i) => <BlogCard {...item} key={i} />)}
      </div>
    )
  }
}

export default Blog;
