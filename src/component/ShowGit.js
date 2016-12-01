import React from "react";
import Paper from 'material-ui/Paper';

class ShowGit extends React.Component{
  render(){
    let info = this.props.gitinfo;
    let styles = {
      img:{
        width:"100%",
        maxWidth:"130px",
        borderRadius:"50%",
        boxShadow:" rgba(0, 0, 0, 0.5) 0px 10px 18px",
        marginBottom:"25px"
      }
    }
    const style = {
      height: 100,
      width: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    return(
      <div className="show-git">
          <img src={info.avatar_url} style={styles.img}/>
          <div className="show-title">
          <h3>{info.login}</h3>
            <p>followers<br/>{info.followers}</p>
            <p>following<br/>{info.following}</p>
            <p>public_repos<br />{info.public_repos}</p>
          </div>
      </div>
    )
  }
}

export default ShowGit;
