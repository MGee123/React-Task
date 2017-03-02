import React from 'react'
import Propson from '../question5/propson'

export default class Company extends React.Component {
 render () {

 return (  <div>
	<p>Company: { this.props.name }</p>
	
    <p>Employees: <Propson person={{name: 'John', age: 20}}/> 
	<Propson person={{name: 'Rich', age: 27}} /></p>
       
</div>
);
}
}
