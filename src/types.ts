export interface MovieListProps {
  movies: Movie[]
}
export interface Movie {
  id: number
  name: string
  poster_path: string | null
  title:string
}
