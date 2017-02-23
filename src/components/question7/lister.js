import React from 'react'

export default class Lister extends React.Component {
render () {
return (
<p><li> {_.join(this.props.numbers, '</li><li>')}</li></p>
);
}
}
