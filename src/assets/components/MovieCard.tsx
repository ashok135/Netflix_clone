import { Card } from '@/components/ui/card'

interface MovieCardProps {
  movie: {
    id: number
    name: string
    poster_path: string | null
  }
  count: number
}

function MovieCard({ movie, count }: MovieCardProps) {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500'
  return (
    <button aria-label={` open the movie ${movie.name}`}>
    <Card className="p-0 mt-4 " role='button' tabIndex={0}>
      <div
        className="w-[200px] relative
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
        <p
          className=" text-[90px] font-bold absolute top-[50%]  stroke-white "
          style={{ WebkitTextStroke: '2px white' }}
        >
          {count}
        </p>
      </div>
      {movie.name}
    </Card>
    </button>
  )
}

export default MovieCard
