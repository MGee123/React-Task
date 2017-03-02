import React from 'react'
import Propson from '../question5/propson'

export default class Company extends React.Component {
 render () {



const x = _.map(this.props.Employees, (employee, i) => <Propson key={ i } person={ employee } />)
 return (  <div>
    <p>Company: { this.props.name }</p>
    
    <p>Employees: {x}</p>
       
</div>
);
}
}

