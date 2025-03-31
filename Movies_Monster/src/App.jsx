import React, { useEffect, useState } from 'react'
import './App.css'
import searchimg from'./assets/search.svg'
import MovieCard from './MovieCard'
// 5f4f3a6
const API_URL = "http://www.omdbapi.com/?apikey=5f4f3a6"



function App() {
  const [movie, setmovie] = useState([])
  const [search, setsearch] = useState("")

  const searchmovies = async (title) =>{
    let response =await fetch(`${API_URL}&s=${title}`)
    let data = await response.json()
    setmovie(data.Search)
  }


  // const sample = {
  //     "Title": "Superman, Spiderman or Batman",
  //     "Year": "2011",
  //     "imdbID": "tt2084949",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
  // }
  
  // You can write js into html into js into html like this {js(html{js(html)})}    {}=> js   ()=> html

  return (
    <>
      <div className="app">
        <h1>Movies Monster</h1>
        <div className="search">
          <input type="text" 
            placeholder='Search for Movies'
            value={search}
            onChange={(e)=>{setsearch(e.target.value)}}
          />
          <img 
          src={searchimg} 
          alt="Search button"
          onClick={()=>{searchmovies(search)}}
          />
        </div>
        {
          movie?.length > 0? (
            <div className="container">
              {
                movie.map((mv)=>{
                  return (<MovieCard key={mv.imdbID} details={mv}/>)
                })
              }
            </div>
          ):(
            <div className='empty'>Movie Not Found</div>
          )
        }

      </div>
    </>
  )
}

export default App