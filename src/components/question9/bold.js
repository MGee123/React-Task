import React from 'react'
export default class Bold extends React.Component {
render () {
const x =  (numbers) => _.map(numbers, (number) => {
 if (number % 2 == 0) return <li><b>{number}</b></li> 
else return <li>{number}</li>
})
return (
<ul>{x(this.props.numbers)}</ul>
);
}
}
