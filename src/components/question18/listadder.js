import React from 'react';

const List = props => <ul> { _.map(props.nameList, name => <li>{name}</li>)}</ul>;

export default class NameList extends React.Component {
  constructor() {
    super();
    this.state = { nameList: ['Richard'], nameToAdd: '' };
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState(prevState => ({ nameList: _.concat(prevState.nameList, this.state.nameToAdd), nameToAdd: '' }));
  }

  render() {

    return (
      <div>
        <input type="text" value={ this.state.nameToAdd } onChange={ e => this.setState({ nameToAdd: e.target.value }) } />
        <button onClick={ this.handleClick }>AddName</button>
        <List nameList={ this.state.nameList } />
      </div>

    );
  }
}
