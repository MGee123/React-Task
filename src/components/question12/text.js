import React from 'react'

export default class Button extends React.Component {
 render () {
return <div>
<text style={{color: 'pink'}}>Hello There!</text>
<button onClick={() => console.log('Hello World')} name='button'>ez</button>
</div>
}
}

