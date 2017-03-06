import React from 'react'
export default class Buttoner extends React.Component {
  render() {
    return (
      <div>

        <button
          onClick={this.props.onPress}
          style={{ width: 500, height: 500 }}
          name="button"
        >{this.props.children}</button>
      </div>
    )
  }
}

