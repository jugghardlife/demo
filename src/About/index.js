import React from "react";
import axios from "axios";

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Loading from "../component/Loading";
import ShowGit from "../component/ShowGit";

class About extends React.Component{
  constructor(){
    super();
    this.state={
      data:{},
      //0 没搜索  1 后台没响应，数据未接收  2  数据接受完毕
      wait:2
    }
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({
      wait:1
    })
    let value = this.refs.gitname.getValue();
    axios.get(`https://api.github.com/users/${value}`)
    .then(res=>this.setState({data:res.data,wait:2}))
    .catch(error=>{alert(error);this.setState({wait:0})})
    this.refs.form.reset()
  }
  render(){
    const style = {
      margin: 12
    };
    let showGitinfo=this.state.wait==0 ?null:this.state.wait==1?<Loading />:<ShowGit gitinfo={this.state.data}/>
    return(
      <div className="about-wrap">
        <div className="git-card">
          <h2 >Seach Git Info</h2>
          <form ref="form" className="about-form" onSubmit={this.handleSubmit.bind(this)}>
            <TextField style={{width:"57%"}} ref="gitname" id="text-field-default" hintText="Seach github" underlineStyle={{color:"#00bcd4"}}/>
            <RaisedButton  onClick={this.handleSubmit.bind(this)} label="Primary" primary={true}  />
          </form>
          {showGitinfo}

        </div>
      </div>
    )
  }
}

export default About;
