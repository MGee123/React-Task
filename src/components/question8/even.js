import React from 'react'
export default class Even extends React.Component {
render () {
const x =  (numbers) => _.map(numbers, (number) => {
 if (number % 2 == 0) return <li>{number}</li>
})
return (
<ul>{x(this.props.numbers)}</ul>
);
}
}
