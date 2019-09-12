import React, { useState } from 'react';
import YTsearch from 'youtube-api-search';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MainVideo from './components/MainVideo';
import ListOfRelatedVideos from './components/ListOfRelatedVideos';
import WatchHistory from './components/WatchHistroy';
import SearchResults from './components/SearchResults';
import Loader from 'react-loader-spinner';

// hint : always avoid putting your auth key in the public files, coz anyone can see them and use them.(Security)
// hint : keep your keys in a file called .env (environment variables file) its more secure.
// hint : add .env to gitignore file so this file will not be available on github
const AUTH_KEY = process.env.REACT_APP_AUTH_KEY;

// loader component -> just for ux consideration.
const MyLoader = () => {
	return <Loader type="Oval" color="red" height={50} width={50} />;
};

// Code Optimization and Reduction
// 1- the new App component now using React Hooks.
// 2- the code lines now 52 and can be reduced more.
// 3- the app state efficiency increased.
// 4- getting state variables made easy no need to call this.state.variable every time.
// 5- you can change state dynamically no need to worry about the whole state object.

// hint : avoid updating the state where you don't need to update.

// Task : Transform the whole App into React Hooks so you can have a good chance to practice.

const App = () => {
	const [ text, setText ] = useState('');
	const [ videos, setVideos ] = useState([]);
	const [ selectedVideo, setSelectedVideo ] = useState(null);
	const [ watchedVideos, setWatchedVideos ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	const handleSearch = (searchText) => {
		setLoading(true);
		YTsearch({ key: AUTH_KEY, term: searchText, maxResults: 24 }, (data) => {
			setVideos(data);
			setLoading(false);
		});
	};
	const handleText = (text) => {
		setText(text);
		handleSearch(text);
	};

	const handleSelect = (selectedVideo) => {
		if (watchedVideos.indexOf(selectedVideo) !== -1) {
			watchedVideos.splice(watchedVideos.indexOf(selectedVideo), 1);
		}
		watchedVideos.push(selectedVideo);
		setSelectedVideo(selectedVideo);
		setWatchedVideos(watchedVideos);
	};
	return (
		<div className="container-fluid">
			<Header />
			<SearchBar text={text} handleText={handleText} />
			{!selectedVideo ? loading ? (
				<div style={{ textAlign: 'center' }}>
					<MyLoader />
				</div>
			) : (
				<SearchResults videos={videos} selectedVideo={selectedVideo} handleSelect={handleSelect} />
			) : (
				''
			)}
			{selectedVideo && (
				<div className="row">
					<WatchHistory
						watchedVideos={watchedVideos}
						selectedVideo={selectedVideo}
						handleSelect={handleSelect}
					/>
					<MainVideo selectedVideo={selectedVideo} />
					<ListOfRelatedVideos videos={videos} selectedVideo={selectedVideo} handleSelect={handleSelect} />
				</div>
			)}
		</div>
	);
};

export default App;

// Note : i kept the old code so you can compare.

// class App extends Component {

//   state = {
//     text: '',
//     videos: [],
//     selectedVideo: null,
//     watchedVideos: []
//   };

//   componentDidMount() {
//     console.log("This project is done by Ahmad Al-Ghzawi.");
//   }

//   handleSearch = searchText => {
//     YTsearch({key: authKey, term: searchText, maxResults: 24}, (data) => {
//       this.setState({ videos: data, selectedVideo: null})
//     });
//   }

//   handleText = text => {
//     this.setState({text})
//     this.handleSearch(text)
//   }

//   handleSelect = selectedVideo => {
//     const watchedVideos = this.state.watchedVideos;
//     if(watchedVideos.indexOf(selectedVideo) !== -1) {
//       watchedVideos.splice(watchedVideos.indexOf(selectedVideo), 1)
//     }
//     watchedVideos.push(selectedVideo)
//     this.setState({selectedVideo, watchedVideos})
//   }

//   render() {
//     if(!this.state.selectedVideo) {
//       return (
//         <div className = 'container-fluid'>
//           <Header />
//           <SearchBar
//             text={this.state.text}
//             handleText={this.handleText}
//           />
//           <SearchResults
//             videos={this.state.videos}
//             selectedVideo={this.state.selectedVideo}
//             handleSelect={this.handleSelect}
//           />
//         </div>
//       )
//     }

//     return (
//       <div className = 'container-fluid'>
//         <Header />
//         <SearchBar
//           handleText={this.handleText}
//         />
//         <div className = 'row'>
//           <WatchHistory
//             watchedVideos={this.state.watchedVideos}
//             selectedVideo={this.state.selectedVideo}
//             handleSelect={this.handleSelect}
//           />
//           <MainVideo
//             selectedVideo={this.state.selectedVideo}
//           />
//           <ListOfRelatedVideos
//             videos={this.state.videos}
//             selectedVideo={this.state.selectedVideo}
//             handleSelect={this.handleSelect}
//           />
//         </div>
//       </div>
//      );
//   }

// }

// export default App;
