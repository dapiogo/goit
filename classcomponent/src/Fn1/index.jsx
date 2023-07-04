/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class Fn1 extends Component {
  add(event) {
    console.log('dodaj', event);
    console.log('dodaj', this.props.likes + 2);
  }

  substract(event) {
    console.log('odejmij', event);
    console.log('odejmij', this.props.likes - 2);
  }

  render() {
    const { likes } = this.props;
    return (
      <div>
        <div>Nasze lajki:{likes}</div>

        <button onClick={this.add.bind(this)}>Dodaj</button>
        <button onClick={this.substract.bind(this)}>Odejmij</button>
      </div>
    );
  }
}

export default Fn1;
