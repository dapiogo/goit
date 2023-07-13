import React, { Component } from 'react';

const spinnerStyle = {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '5px solid #ccc',
    borderTopColor: '#333',
  };

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    padding:'10px'
  };

class Loading extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <div style={spinnerStyle} />
        <span style={{ marginLeft: '8px' }}>Loading...</span>
      </div>
    );
  }
}

export default Loading;