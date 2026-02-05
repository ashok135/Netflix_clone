import useSearchStore from '@/store/store'
import type { Movie, } from '../types'
import MovieCard from '@/assets/components/MovieCard'
import { useEffect, useRef, useState } from 'react'
 
import api from '../api/FetchAPI'
 
 
function Movies() {
  const {   fetchPopular } = useSearchStore()
  const [page,setPage] = useState(1)
  const [movieData,setMovieData] = useState<Movie[] >([])
  const loaderRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    fetchPopular()
  }, [])
  console.log(movieData)

  const dynamicURL = `/movie/popular?language=en-US&page=${page}`
useEffect(()=>{

  const loadingData = async ()=>{

  const response= await api.get(dynamicURL)
  const data = await response.data
  console.log(data)
  setMovieData((prev)=>([...prev,...data.results]))
 
 
 }
 loadingData()

},[page])
 


  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPage(pre=>pre+1)
      }
    })

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className=" ">
      <div className='  w-full top-0 fixed z-50'>
        <h2 className="text-white text-center text-[30px] md:text-[60px] font-bold bg-[#C90100] p-4  ">
       Current Movies  {movieData.length}
           
        </h2>
      </div>
      <div className="flex flex-row flex-wrap gap-4 justify-center md:mt-20 mt-10">
        {movieData.map((movie: Movie) => {
          return (
            <div className="mt-8 lg:p-4 ">
              <MovieCard
                id={movie.id}
                name={movie.name}
                poster_path={movie.poster_path}
                count={null}
              />
              <h3 className="text-white  max-w-37 lg:max-w-35 wrap-break-word">
                {movie.title}
              </h3>
            </div>
          )
        })}
        <div ref={loaderRef} className='text-white text-center'>Loading...</div>
      </div>
    </div>
  )
}

export default Movies
