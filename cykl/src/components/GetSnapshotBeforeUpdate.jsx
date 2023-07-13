import React, { Component } from "react";

class GetSnapshotBeforeUpdate extends Component {
    constructor(props) {
      super(props);
      this.listRef = React.createRef();
      this.state = {
        scrollPosition: 0,
        data: [
          "Item 1",
          "Item 2",
          "Item 3",
          "Item 1",
          "Item 2",
          "Item 3",
          "Item 1",
          "Item 2",
          "Item 3"
        ]
      };
    }
  
    handleAddUser = () => {
      this.props.addNewUser("nowy");
    };
  
    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log("getSnapshotBeforeUpdate", this.listRef.current);
      
      return null;
    }
  
    componentDidUpdate(prevProps, prevState, snapshot) {
      // Przywraca pozycję scrolla po aktualizacji
      console.log('sss')
      if (snapshot !== null) {
        const list = this.listRef.current;
        list.scrollTop = list.scrollHeight - snapshot;
      }
    }
  
    render() {
      console.log("render", this.state);
      return (
        <div ref={this.listRef} style={{ overflowY: "scroll", height: "100px" }}>
          {this.state.data.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <button onClick={this.handleAddUser}>Aktualizuj</button>
        </div>
      );
    }
  }
  
  export default GetSnapshotBeforeUpdate;