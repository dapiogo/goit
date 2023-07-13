import React, { Component } from "react";

//componentDidMount
// const ShouldComponent = () => {}
class ShouldComponent extends Component {
  constructor() {
    super();
    console.log("constructor!");
  }

  state = {
    showMore:false
  }

  handleAddUser = () => {
    this.props.addNewUser('Basie')
  }

  shouldComponentUpdate = (nextProps,nextState) => {
        const oldProps = this.props;

        console.log(nextProps)

        if(nextProps.someProps === oldProps.someProps) {
            ///nie renderuj jezeli dane sa takie same 
            return false;
        }

        return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) { 
        console.log('getSnapshotBeforeUpdate')

  }



  render() {
    console.log("render", this.state);
    return <div>
            <h1>componentDidMount</h1>
            {this.props.users.map((el) => (
                <div>{el}</div>
            ))}
        <button onClick={this.handleAddUser}>Dodaj nowgo</button>
        </div>;
  }
}

export default ShouldComponent;
