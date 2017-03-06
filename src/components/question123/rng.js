import React from 'react'
const Number = (props) => <p>{props.num}</p>
export default class Random extends React.Component {
constructor () {
super()
this.state = {num: 0}
}
render() {

return  (
<div>
<button onClick={() => this.setState({num: Math.random()})}>Press Me</button>
<Number num={this.state.num} />
</div>
)
}
}
