import MovieList from './MovieList'
 
 import useSearchStore from "../../store/store"
import { useEffect } from 'react'
 
  




function TrendingNow() {
 const {query, results,fetchPopular,error,loading} = useSearchStore()
 console.log(loading)
 
useEffect(()=>{

 fetchPopular()
    
  },[query])


  console.log(results)
  return (
    <div className='container mx-auto'>
      <h2 className="text-[30px] font-bold text-[fffff] pt-2" style={{color:"white "}}>TrendingNow</h2>
      <div>
        {loading ?<h2 className='text-[#ffff] text-[40px] text-center'>loading data...</h2> : results?.length > 0 ? (
          <MovieList movies={results } />
        ) : (
          
         <h2 className='text-[#ffff]'> {error}</h2>
        )}
      </div>
    </div>
  )
}

export default TrendingNow
