import React from 'react'


export default class Lister extends React.Component {
render () {
const x =  (numbers) => _.map(numbers, (number) => {
return <li>{number}</li>
})
return (
<ul>{x(this.props.numbers)}</ul>
);
}
}
