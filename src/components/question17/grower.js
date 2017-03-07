import React from 'react'

export default class Grow extends React.Component {
constructor() {
super()
this.state = {height: 20} 
}
render() {

return (
<div>
<div id="bigdiv" style={{width: "50px", height: this.state.height + "px", backgroundColor: "red"}}></div> 

<div>
<button onClick={() => { this.setState( {this.state.height + 20 });}>Grow!</button>
</div>
)
}
}
