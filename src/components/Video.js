import LikeButton from "./LikeButton"

export default function Video({
    video
}){
    return(
        <div className={video.tag}>
            <img src={video.image} width='720px' height='404px'></img>
            <div>
                {video.title}
                <LikeButton></LikeButton>
            </div>
        </div>
    )
}