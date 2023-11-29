import {useState} from 'react'
import Header from './components/Header'
import Filter from './components/Filter'
import Search from './components/Search'
import Video from './components/Video'
import Survey from './components/Survey'

let videoArray = [
	{
		title: "NAT KING COLE 2023 Mix ~ The Best of NAT KING COLE Greatest Hits",
		image: "https://tvvmvn.github.io/mytube/images/nat-cole-king.webp",
		tag: "music"
	},
	{
		title: "YIRUMA - Best Playlist Ever - Relax Beautiful Music",
		image: "https://tvvmvn.github.io/mytube/images/yiruma.webp",
		tag: "music"
	},
	{
		title: "16 Best Places to Visit in Norway - Travel Video",
		image: "https://tvvmvn.github.io/mytube/images/norway.webp",
		tag: "travel"
	},
	{
		title: "2023 Genesis G90 Review! $100,000 Rolls-Royce",
		image: "https://tvvmvn.github.io/mytube/images/genesis.webp",
		tag: "cars"
	}
]

const FILTER_MAP = {
	"all": () => true,
	"music": (video) => video.tag === "music",
	"travel": (video) => video.tag === "travel",
	"cars": (video) => video.tag === "cars"
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

export default function App(){
	const [filter, setFilter] = useState("all")

	const [search, setSearch] = useState(true)

	const videoMap = videoArray.filter(FILTER_MAP[filter]).map((video) => {
		return(
			<Video video={video}></Video>
		)
	})

	const filterButtons = FILTER_NAMES.map((name) => {
		return(
			<Filter 
				key = {name}
				name = {name}
				isPressed = {name === filter}
				setFilter = {setFilter}
			></Filter>
		)
	})

	const [surveySelection, setSurveySelection] = useState(localStorage.getItem("surveySelection"))

	function setSurvey(selection){
		localStorage.setItem("surveySelection", selection)
		setSurveySelection(selection)
	}

	function MainPage(){
		return(
			<>
				<header>
					<Header
						search = {search}
						setSearch = {setSearch}
					></Header>
					<div>
						{filterButtons}
					</div>
				</header>
				<div>
					{videoMap}
				</div>
				<Survey setSurvey={setSurvey} surveySelection={surveySelection}></Survey>
			</>
		)
	}

	const videoListTitles = videoArray.map((video) => {
		return(
			video.title
		)
	})

	function SearchPage(){
		return(
			<Search
				search = {search}
				setSearch = {setSearch}
				videoListTitles = {videoListTitles}
			></Search>
		)
	}

	return(
		<>
			{search ? <MainPage/> : <SearchPage/>}
		</>
	)
}