import MovieList from './MovieList'
 
 import useSearchStore from "../../store/store"
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
 
  




function TrendingNow() {
 const {query, results,fetchPopular,error,loading} = useSearchStore()
 console.log(loading)
 
useEffect(()=>{

 fetchPopular()
    
  },[query])


  console.log(results)
  return (
    <div className='container mx-auto'>
      <div className=' justify-between items-center  flex px-4 py-4'>
           <h2 className="text-[30px] font-bold text-[fffff] pt-2" style={{color:"white "}}>TrendingNow</h2>
           <Link to ={'/movies'}><a className="text-[20px] font-bold text-[fffff] p-2 bg-[#c90100] rounded px-4" style={{color:"white "}}>View All</a></Link> 
      </div>
   
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
