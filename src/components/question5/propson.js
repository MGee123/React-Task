

import React from 'react';

export default class Propson extends React.Component {
  render () {
    return (
      <div>
       <p>name: { this.props.person.name }</p>
       <p>age: { this.props.person.age }</p>
      </div>
    );
  }
}

 
