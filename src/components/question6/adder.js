import React from 'react'

class Adder extends React.Component {
render () {
 const { number1, number2} = this.props;   
 return (
_.add({number1}, {number2})
);
}
}

export default () => (
<p><Adder number1={1} number2={2} /></p>)

