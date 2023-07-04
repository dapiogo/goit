
import React, { Component } from 'react';

class Fn2 extends Component {
  constructor() {
    super();
    this.add = this.add.bind(this);
    this.substract = this.substract.bind(this);
  }

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

        <button onClick={this.add}>Dodaj</button>
        <button onClick={this.substract}>Odejmij</button>
      </div>
    );
  }
}

export default Fn2;
