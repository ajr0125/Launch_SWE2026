import './../App.css'

//const MovieCard = ({name, rating}) => {
const MovieCard = ({title, rating}) => {

    return(
        <>
        <div className='movieCardContainer'>
        <div>
            {title}
        </div>
        <div>
            {rating}
        </div>

        </div>
        </>
    )
}

export default MovieCard;