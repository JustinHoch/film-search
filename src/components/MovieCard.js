// React Components
import { Link } from 'react-router-dom';

// Missing image
import missingImage from '../assets/missing-image.jpg';

function MovieCard({media}) {
  let smPosterPath = `http://image.tmdb.org/t/p/w342${media.poster_path}`;
  if(!media.poster_path){
    smPosterPath = missingImage;
  }
  return (
    <div className="w-40 m-2 shadow-lg rounded bg-gray-800">
      <Link to={`/movie/${media.id}`}>
        <img className="rounded-t" src={smPosterPath} alt="" />
      </Link>
      <div className="p-1 text-white">
        <h3 className="font-bold text-green-500">{media.title}</h3>
        <p>Movie</p>
        <p className="font-light text-sm">Release Date: {media.release_date}</p>
      </div>
    </div>
  )
}

export default MovieCard
