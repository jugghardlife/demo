import React from "react";
import axios from "axios";

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class About extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    this.refs.form.reset()
  }
  render(){
    const style = {
      margin: 12
    };
    return(
      <div className="about-wrap">
        <div className="git-card">
          <h2 >Seach Git Info</h2>
          <form ref="form" className="about-form" onSubmit={this.handleSubmit.bind(this)}>
            <TextField style={{width:"57%"}} id="text-field-default" hintText="Seach github" underlineStyle={{color:"#00bcd4"}}/>
            <RaisedButton  onClick={this.handleSubmit.bind(this)} label="Primary" primary={true}  />
          </form>
        </div>
      </div>
    )
  }
}

export default About;
