export default function Filter({
    name,
    isPressed,
    setFilter
}){
    return(
        <button
            disabled = {isPressed}
            onClick={() => setFilter(name)}
        >
            {name}
        </button>
    )
}