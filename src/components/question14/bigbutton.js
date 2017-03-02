import React from 'react'
export default class Buttoner extends React.Component {
 render () {
return (
<div>

	<button onClick={() => console.log('Hello')} 
	style={{width: 500, height: 500}} 
	name='button'>EZ</button>
</div>
);}
}

