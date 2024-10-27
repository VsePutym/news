import './App.css'
import ScrollToTop from './components/Scroll/Scroll'
import Search from './components/search/Search'
import VideoComponent from './components/Video/Video'
import Header from './features/Header/Header'
import News from './features/News/News'
import "animate.css/animate.min.css";

function App() {
	
	return (
		<div className='App'>
			<Header />
			<Search />
			<News />
			<VideoComponent />
			<ScrollToTop />
		</div>
	)
}

export default App
