import React from 'react'
const List = (props) => <ul> <li> {props.name} </li> </ul>
export default class NameList extends React.Component {
constructor() {
super()
this.state = { name: "Richard"} 
}
render() {

return (
<input type ="text" value= {this.props.name}/>
<button onClick={() => { this.setState({this.state + <li> this.props.name </li> });}}>Add Name</button>
<List name={this.state.name}/>


