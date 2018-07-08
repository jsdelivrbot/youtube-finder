import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search-bar'

const API_KEY = 'AIzaSyA2G8yz6h5fTqng37f5Q5jigdUr7AV7Qr4'

const App = () => {
  return (
    <div>
    <SearchBar/>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.container'))