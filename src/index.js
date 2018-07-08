import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search-bar'
import VideoList from './components/video-list'
import VideoDetail from './components/video-detail'
const API_KEY = 'AIzaSyA2G8yz6h5fTqng37f5Q5jigdUr7AV7Qr4'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = { videos: []}

    // Get videos relevant to the term
    YTSearch({key: API_KEY, term: 'detroit become human'}, (videos) => {
      this.setState({ videos })
    })
  }

  render () {
    return (
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
