import React from 'react'


export default class Namer extends React.Component {
  constructor() {
    super()
    this.state = { index: 0 }
  }

  render() {
    const list = this.props.names

    return (
      <div>
        <button onClick={() => { if (this.state.index + 1 >= list.length) { this.setState({ index: 0 }) } else { this.setState({ index: this.state.index + 1 }) } }}>Next</button>
        <p>{list[this.state.index]}</p>
      </div>
    )
  }
}
