export default function Header({
    search,
    setSearch
}){
    return(
        <>
            <h1>mytube</h1>
            <button onClick={() => setSearch(!search)}>search</button>
        </>
    )
}