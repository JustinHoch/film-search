// REACT COMPONENTS
import { Link } from "react-router-dom"

function TvCard({media}) {
  const smPosterPath = `http://image.tmdb.org/t/p/w342${media.poster_path}`
  return (
    <div className="w-40 m-2">
      <Link to={`/tv/${media.id}`}>
        <img className="rounded" src={smPosterPath} alt="" />
      </Link>
      <div className="p-1 text-white">
        <h3 className="font-bold">{media.name}</h3>
        <p>TV Show</p>
        <p className="font-light text-sm">Release Date: {media.first_air_date}</p>
      </div>
    </div>
  )
}

export default TvCard
