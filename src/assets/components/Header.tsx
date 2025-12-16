 
import { Search } from "lucide-react"
 
 import useSearchStore from "../../store/store"
 import { Card } from '@/components/ui/card'

import { useEffect, useRef, useState } from "react"
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
 

function Header() {
const { query, setQuery, performSearch, results } = useSearchStore()

   const BASE_URL = 'https://image.tmdb.org/t/p/w500'
 const [search ,setSearch]= useState (false)
const inputRef = useRef<HTMLInputElement | null>(null)
 function showBar(){
  setSearch(!search)
  inputRef.current?.focus()
 }
 console.log(query)
 useEffect(()=>{
   performSearch(query)

 },[])
  const fiterdata =()=>{
 return results?.map(movie=>(
  <button aria-label={movie.title}>
          <Card className="p-0" key={movie?.id}>
            <div
        className="w-[200px] relative p-0 
                    "
      >
        <img
          src={
            movie.poster_path
              ? `${BASE_URL}${movie.poster_path}`
              : 'https://image.tmdb.org/t/p/w500/4H1jWsgEQOgTs4KeG5j5BorKMfX.jpg'
          }
          alt=""
          className="rounded-xl w-full h-[300px] object-cover 
                     transition-transform duration-300 
                     group-hover:scale-105"
        />
        
      </div>
      </Card>
      </button>
         )) 
 }
 useEffect(()=>{
  
 fiterdata()

 },[results])
 console.log(fiterdata())

 
 
  return (
    <div className="" >
    { !query.trim() ?
      <div className="py-4 flex justify-between px-2 lg:px-8 items-center contail">  <div className="text-[20px] md:text-[50px] font-bold text-[#ffff]" tabIndex={0}>Netflix</div>
    <div className=" flex flex-row gap-2 p-2" > {search? <input tabIndex={0} className="text-[#ffff] border p-2"
    placeholder="search here"
    ref={inputRef}
    value={query}
    onChange={(e)=>{
      setQuery(e.target.value)
      performSearch(e.target.value)
    }}
    autoFocus/>:""}<button onClick={showBar}><Search tabIndex={0} type="button" className="text-white " /></button>
     <>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="px-4 py-2 bg-[#E50914] text-white rounded">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <div className="  flex justify-center p-2 ">
          <UserButton />
        </div>
      </SignedIn>
    </>
     </div>
    </div>
    :
      
    <div>
        <div className="py-4 flex justify-between px-2 lg:px-8 items-center contail">  <div className="text-[20px] md:text-[50px] font-bold text-[#ffff]">Netflix</div>
    <div className=" flex flex-row gap-2 p-2" > {search? <input className="text-[#ffff] border p-2"
    placeholder="search here"
    ref={inputRef}
    value={query}
    onChange={(e)=>{
      setQuery(e.target.value)
      performSearch(e.target.value)
    }}
    autoFocus/>:""} <Search  className="text-white " onClick={showBar}/>
      <div>  

      <SignedOut  >
        <SignInButton />
      </SignedOut>
    
          <SignedIn >
          <div  >
          <UserButton />
         </div>

         
         </SignedIn>
      
    
     </div></div>
    </div>
    <div><h1 style={{color:"white"}}>Search results:</h1></div>
     <div className="flex flex-wrap justify-center gap-4 mt-4">
      
      
      {results?.length > 0 ?  fiterdata() : <h2 className=" text-[#ffff]">No Data Found !!</h2>}
       
        
      </div>
    
       
     </div>
     
        
   
}
  
    </div>
  )
}

export default Header