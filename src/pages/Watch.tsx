 
import useSearchStore from '@/store/store';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
 
 import type { Movie } from '@/types';
 
function Watch() {
  const [movieData,setMovieData]=useState<Movie|null>(null)
  const [isMore , setIsMore]=useState<number>(200)
  const {id}=useParams()
 console.log(typeof id) 
 const numId = Number(id)
  console.log(typeof numId) 
   const { results,fetchPopular,getSingleMovie } = useSearchStore() 
  const videoUrls = [
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
];
   
  useEffect(()=>{
    fetchPopular()


  },[])
 
 useEffect(()=>{

    if(results){
       function movieSingle(){
        return( getSingleMovie(numId))
       
       } 
     
      const data =movieSingle() 
      setMovieData(data)
      console.log(data)
        
      
  
      }
 },[results])
     
      
 console.log(isMore)
 
  return (
    <div >
      <div>
        <h2 className='text-[30px] text-center text-white'> {movieData?.title}</h2>
        <div>
           <video
          src={videoUrls[Number(id?.toString()[0])]??0}
          controls
          autoPlay
          className="w-full rounded-lg bg-black"
        />
       
        </div>
         <div className='p-2 md:p-4'>
        <h4 className='text-white text-[20px] font-bold'>Overview:</h4>
        <p className='text-white'>{movieData?.overview &&movieData?.overview?.length > isMore ? `${movieData?.overview.slice(0,isMore)}.. ` : movieData?.overview.slice(0,isMore) }{isMore==200 ? <button className='underline decoration-red-500 decoration-dashed' onClick={()=>setIsMore(2000)}> more</button> : <button className='underline decoration-red-500 decoration-dashed' onClick={()=>setIsMore(200)}> less</button>} </p> 
        
        </div>
      </div>
    </div>
  )
}

export default Watch
