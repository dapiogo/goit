import React, { Component } from "react";

//componentDidMount
class DidMountComponent extends Component {
  constructor() {
    super();
    console.log("constructor!");
  }


  componentDidMount(){
    console.log('componentDidMount')
    console.log('pobrac dane z api')
    const scrollH = 100;
    if(scrollH > 80) {
        console.log('dodaj notyfikacje')
    }
  }



  render() {
    console.log("render", this.state);
    return <div>
            <h1>componentDidMount</h1>
        </div>;
  }
}

export default DidMountComponent;
