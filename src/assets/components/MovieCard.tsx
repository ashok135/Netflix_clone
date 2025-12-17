import { Card } from '@/components/ui/card'
import { Link, useParams } from 'react-router-dom'
 

interface MovieCardProps   {
 
    id: number
    name: string
    poster_path: string | null
     count: number |null
}

function MovieCard({ id,name,poster_path,count }: MovieCardProps) {
 
  const BASE_URL = 'https://image.tmdb.org/t/p/w500'
  return (
    <Link to={`/watch/${id}`}>
      <button aria-label={` open the movie ${name} `} key={id}>
        <Card className="p-0 mt-4 group" tabIndex={0}>
          <div className="w-[200px] relative ">
            <img
              src={
                poster_path
                  ? `${BASE_URL}${ poster_path}`
                  : 'https://image.tmdb.org/t/p/w500/4H1jWsgEQOgTs4KeG5j5BorKMfX.jpg'
              }
              alt=""
              className="rounded-xl w-full h-[300px] object-cover 
                     transition-transform duration-300 
                     group-hover:scale-105  select-none pointer-events-none"
            />
            <p
              className=" text-[90px] font-bold absolute top-[50%]  stroke-white "
              style={{ WebkitTextStroke: '2px white' }}
            >
              {count}
            </p>
          </div>
          {name}
        </Card>
      </button>
    </Link>
  )
}

export default MovieCard
