import useSearchStore from "@/store/store"
import type { Movie } from "../types"
import MovieCard from "@/assets/components/MovieCard"
import { useEffect } from "react"

 
function Movies() {
    const { results,fetchPopular } = useSearchStore() 
    useEffect(()=>{
        fetchPopular()
       
        
       
    },[])
     
    

  return (
    <div className="">
      <div>
      <h2 className="text-white text-center text-[30px] md:text-[60px] font-bold bg-[#C90100] p-4 ">All Movies List </h2>

      </div>
        <div className="flex flex-row flex-wrap gap-4 ">
        {results.map((movie:Movie, )=>{
           return( 
                  <div className="mt-8"> 
                 
                    <MovieCard id={movie.id} name={movie.name} poster_path={movie.poster_path} count={ null} />
                     <h3 className="text-white  max-w-[180px] break-words">{movie.title}</h3>
                   </div>
                
          
            )}


        )}
        </div>
     </div>
  )
}

export default Movies