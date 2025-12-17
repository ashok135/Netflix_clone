import { create, useStore } from 'zustand'
import type { Movie } from '../types'
 
 
 
import api from '../api/FetchAPI'
 
 
 
 
 
let debounceTimer: ReturnType<typeof setTimeout> | null = null
const DEBOUNCE_MS = 500

type SearchState = {
  query: string

  results: Movie[]
  error:string
  loading:boolean
  setLoading:(l:boolean)=>void
  setError:(e:string)=>void
  setQuery: (q: string) => void
  setResults: (r: Movie[]) => void
  performSearch: (q: string) => void
  fetchPopular: () => Promise<void>
  getSingleMovie:(id:number)=> Movie | null 
 
}
 
 

export const useSearchStore = create<SearchState>((set,get) => ({
  query: " ",
  results: [] ,
  error:"",
  loading:false,
  setError:(e:string)=>set({error:e}),

  setLoading:(l:boolean)=>set({loading:l}),

  setQuery: (q: string) => set({ query: q }),

  setResults: (r: Movie[]) => set({ results: r }),
   
  fetchPopular: async () => {
    try {
      set({loading:true})
      const res = await api.get("/movie/popular?language=en-US&page=1");
       
      set({ results: res.data.results });
      
      console.log(res.data.results)
    } catch (err:any) {
        
         console.log(err);
      set ({setError:err.message})
    }
    finally{
      set({loading:false})
    }
  },
 

  performSearch: (q: string) => {
      
    
     
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }

    debounceTimer = setTimeout(() => {

  
        const { results } = get();
        
      const filtered =results.filter((movie) =>
        movie.title.toLowerCase().includes(q.toLowerCase())
      )

      set({ results: filtered })
    }, DEBOUNCE_MS)
  },
  getSingleMovie:(id:number)=>{
     const { results } = get();
     console.log(results)
   
    return( results?.find((result)=>id==result.id)?? null)
  }
 
}))

export default useSearchStore
