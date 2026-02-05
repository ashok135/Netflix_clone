
import {  useRef } from "react"
import type { MovieListProps } from "../../types"
import type { Movie } from "../../types"
import MovieCard from "./MovieCard"
import { ChevronLeft, ChevronRight } from "lucide-react"
  



function MovieList({ movies }:MovieListProps) {
  const sliderRef=useRef<HTMLUListElement | null>(null)
  const scrollAmount = 240
  const scrollLeft = () =>{
    sliderRef.current?.scrollBy({
      left:-scrollAmount,
      behavior:"smooth"
    })
  }
  const scrollRight = ()=>{
    sliderRef.current?.scrollBy({
      left:scrollAmount,
      behavior:"smooth"
    })
  }
   
  return <div className="p-4 relative ">
   <button
        onClick={scrollLeft}
        aria-label="Scroll left"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                   bg-black/60 text-white p-2 rounded-full
                   hover:bg-black transition hidden md:flex"
      >
        <ChevronLeft size={24} />
      </button>
    
    <ul ref={sliderRef} className="flex gap-4 overflow-x-auto scrollbar-hide   mx-auto relative container"> 
       
      {movies.map((movie:Movie,index:number)=>  (<li key={movie.id} className=" py-2  shrink-0 min-w-50"> 
      <MovieCard id={movie.id} name={movie.name} poster_path={movie.poster_path}  count={index+1}/>
     </li>))}</ul>
           <button
        onClick={scrollRight}
        aria-label="Scroll right"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                   bg-black/60 text-white p-2 rounded-full
                   hover:bg-black transition hidden md:flex"
      >
        <ChevronRight size={24} />
      </button>

   
  </div>
}

export default MovieList
