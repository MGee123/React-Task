import React from 'react'

export default class Grow extends React.Component {
constructor() {
super()
this.state = {height: 20} 
}
render() {

return (
<div id="bigdiv" style={{width: '100%', height: this.state.height, backgroundColor: "red"}}> 

<button onClick={() => { this.setState( {height: this.state.height + 20 });}}>Grow!</button>
</div>

)
}
}
