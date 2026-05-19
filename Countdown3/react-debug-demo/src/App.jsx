import { useState } from 'react'
import './App.css'
import MovieCard from './components/movieCard'

const movieData = {
  action: [
    { title: "Mad Max", rating: 8.1 },
    { title: "John Wick", rating: 7.4 }
  ],
  comedy: [
    { title: "Superbad", rating: 7.6 },
    { title: "Step Brothers", rating: 6.9 }
  ],
  animation: [
    { title: "Toy Story", rating: 8.3 },
    { title: "Finding Nemo", rating: 8.2 }
  ]
};

function App() {
  const [showAction, changeShowAction] = useState(true)
  const [showComedy, changeShowComedy] = useState(true)
  const [showAnimation, changeShowAnimation] = useState(true)
  return (
    <>
    <div>
      {showAction === true ? <button onClick={() => changeShowAction(false)}>hide action</button> : <button onClick={() => changeShowAction(true)}> show action</button>}
      {showComedy === true ? <button onClick={() => changeShowComedy(false)}>hide comedy</button> : <button onClick={() => changeShowComedy(true)}> show comedy</button>}
      {showAnimation === true ? <button onClick={() => changeShowAnimation(false)}>hide animation</button> : <button onClick={() => changeShowAnimation(true)}> show animation</button>}
    </div>

    <div>
      { showAction === true ?
        //movieData.map((movie, index) => {
        movieData.action.map((movie, index) => {
          console.log(movie);
          return <MovieCard key={index} title={movie.title} rating={movie.rating}></MovieCard>
          //return <MovieCard key={index} title={movie.title} rating={movie.rating}></MovieCard>
        }) : null
      }
      { showComedy === true ?
        movieData.comedy.map((movie, index) => {
          return <MovieCard key={index} title={movie.title} rating={movie.rating}></MovieCard>
        }) : null
      }
      { showAnimation === true ?
        movieData.animation.map((movie, index) => {
          return <MovieCard key={index} title={movie.title} rating={movie.rating}></MovieCard>
        }) : null
      }
            
    </div>
    </>
  )
}

export default App
