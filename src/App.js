import React, { Component } from 'react';
import YTsearch from 'youtube-api-search';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MainVideo from './components/MainVideo';
import ListOfRelatedVideos from './components/ListOfRelatedVideos'
import WatchHistory from './components/WatchHistroy'
import SearchResults from './components/SearchResults';

const authKey = 'AIzaSyA5S-skHku6RjMDIue2pE78FTd6cN13OvA';

class App extends Component {

  state = { 
    text: '',
    videos: [],
    selectedVideo: null,
    watchedVideos: []
  };

  componentDidMount() {
    console.log("This project is done by Ahmad Al-Ghzawi.");
  }

  handleSearch = searchText => {
    YTsearch({key: authKey, term: searchText, maxResults: 24}, (data) => {
      this.setState({ videos: data, selectedVideo: null})
    });
  }

  handleText = text => {
    this.setState({text})
    this.handleSearch(text)
  }
  
  handleSelect = selectedVideo => {
    const watchedVideos = this.state.watchedVideos;
    if(watchedVideos.indexOf(selectedVideo) !== -1) {
      watchedVideos.splice(watchedVideos.indexOf(selectedVideo), 1)
    }
    watchedVideos.push(selectedVideo)
    this.setState({selectedVideo, watchedVideos})
  }

  render() {
    if(!this.state.selectedVideo) {
      return (
        <div className = 'container-fluid'>
          <Header />
          <SearchBar
            text={this.state.text}
            handleText={this.handleText} 
          />
          <SearchResults 
            videos={this.state.videos}
            selectedVideo={this.state.selectedVideo}
            handleSelect={this.handleSelect}  
          />
        </div>
      )
    } 
    
    return ( 
      <div className = 'container-fluid'>
        <Header />
        <SearchBar
          handleText={this.handleText} 
        />
        <div className = 'row'>
          <WatchHistory 
            watchedVideos={this.state.watchedVideos}
            selectedVideo={this.state.selectedVideo}
            handleSelect={this.handleSelect}
          />
          <MainVideo 
            selectedVideo={this.state.selectedVideo}
          />
          <ListOfRelatedVideos 
            videos={this.state.videos}
            selectedVideo={this.state.selectedVideo}
            handleSelect={this.handleSelect}
          />
        </div>
      </div>
     );
  }

}
 
export default App;

