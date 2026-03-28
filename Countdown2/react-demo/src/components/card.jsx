import './../App.css'

const Card = props => {
    return(
        <>
        <div className="card">
          <h1>{props.title}</h1>
          <br />
          <p>{props.content}</p>
        </div>
        </>
    )
}

export default Card;