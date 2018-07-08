import React from 'react'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {term: ''}
  }
  render () {
    return <input onChange={event => this.setState({ term: event.target.value })}/>
  }
}

export default SearchBar
