import {useState} from "react"

export default function Search({
    search,
    setSearch,
    videoListTitles
}){
    const [searchTitle, setSearchTitle] = useState(null)

    const videoTitleFilter = videoListTitles.filter((titles) => {
        titles = titles.toLowerCase()

        return(
            titles.includes(searchTitle)
        )
    }).map((title) => {
        return <li>{title}</li>
    })

    return(
        <>
            <button onClick={() => setSearch(!search)}>back</button>
            <input onChange={(e) => setSearchTitle(e.target.value)}></input>
            <ul>
                {videoTitleFilter}
            </ul>
        </>
    )
}