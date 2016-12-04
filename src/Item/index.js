import React from "react";
import axios from "axios";
import marked from "marked";
import Loading from "../component/Loading";
import hljs from 'highlight.js';


class Item extends React.Component{
  constructor(){
    super();
    this.state={
      data:""
    }
  }
  componentDidMount(){
    let address=this.props.params.title;
    axios.get(`https://raw.githubusercontent.com/jugghardlife/demo/master/data/${address}.md`)
    .then(res=>this.setState({data:res.data}))
    .catch(err=>alert(err))
  }
  render(){
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    return(
      <div>
        {
          this.state.data.length==0?<Loading />:
          <div className="post-content" dangerouslySetInnerHTML={{__html:marked(this.state.data)}}></div>
        }
      </div>
    )
  }
}

export default Item;
