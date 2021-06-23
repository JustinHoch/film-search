// React Components
import { Link } from 'react-router-dom';

function MovieCard({media}) {
  const smPosterPath = `http://image.tmdb.org/t/p/w342${media.poster_path}`;
  return (
    <div className="w-40 m-2">
      <Link to={`/movie/${media.id}`}>
        <img className="rounded" src={smPosterPath} alt="" />
      </Link>
      <div className="p-1 text-white">
        <h3 className="font-bold">{media.title}</h3>
        <p>Movie</p>
        <p className="font-light text-sm">Release Date: {media.release_date}</p>
      </div>
    </div>
  )
}

export default MovieCard
