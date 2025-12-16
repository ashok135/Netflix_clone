
import type { MovieListProps } from "../../types"
import type { Movie } from "../../types"
import MovieCard from "./MovieCard"



function MovieList({ movies }:MovieListProps) {
  let count =0
  return <div className="scrollbar-hide">
    
    <ul className="flex flex-row gap-4 overflow-x-auto scroll-smooth scrollbar-hide container mx-auto lg:max-w-7xl"> {movies.map((movie:Movie)=>  (<li key={movie.id} className=" py-2"> 
      <MovieCard movie={movie} count = {++count}/>
     </li>))}</ul>
   
  </div>
}

export default MovieList
