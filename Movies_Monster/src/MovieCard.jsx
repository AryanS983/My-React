import React from 'react'

function MovieCard({details}) {
  return (
    <div className="movie">
        <div>
            <p>{details.Year}</p>
        </div>
        <div>
            <img src={details.Poster!='N/A'? details.Poster : "https://via.placeholder.com/400"} alt={details.Title} />
        </div>
        <div>
            <span>{details.Type}</span>
            <h3>{details.Title}</h3>
        </div>
    </div>
  )
}

export default MovieCard