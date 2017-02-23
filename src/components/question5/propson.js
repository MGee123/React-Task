

import React from 'react';

export default class Propson extends React.Component {
  render () {
    const { name, age } = this.props;

    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  }
}
