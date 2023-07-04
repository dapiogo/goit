/* eslint-disable react/prop-types */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class FirstClassComponent extends Component {
  // static defaultProps = {
  //     text:'Default text',
  //     count:0
  // }

  // static propTypes = {
  //     text:PropTypes.string,
  //     count:PropTypes.number,
  // }

  render() {
    const { text, count } = this.props;

    return (
      <div>
        <h1>{text}</h1>
        <h2>Count: {count}</h2>
      </div>
    );
  }
}

export default FirstClassComponent;
