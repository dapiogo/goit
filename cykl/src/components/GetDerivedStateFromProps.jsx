import React, { Component } from "react";

//getDerivedStateFromProps
class GetDerivedStateFromProps extends Component {
  constructor() {
    super();
    console.log("constructor!");
  }

  state = {
    activeUsers: ['tomek-admin']
  }

  // przydatna do aktualizacji stanu przed renderowaniem
  static getDerivedStateFromProps(nextProps,prevState){
    console.log("getDerivedStateFromProps", nextProps, prevState);
    return {
        activeUsers:[...prevState.activeUsers, nextProps.users]
    }
  }


  render() {
    console.log("render", this.state);
    return <div>
            <h1>GetDerivedStateFromProps</h1>
            {this.state.activeUsers.map(user => <div>{user}</div>)}
        </div>;
  }
}

export default GetDerivedStateFromProps;
