import Genres from "./Genres"

function MoviePageDetails({ poster, title, runtime, cert, genres }) {
  return (
    <div className="p-2 flex">
      <img className="rounded w-44 mr-2" src={`http://image.tmdb.org/t/p/w342${poster}`} alt="" />
      <div>
        <h2 className="text-xl font-bold text-green-500">{title}</h2>
        <p className="text-white mt-2">Runtime: {runtime}min</p>
        <p className="text-white mt-2">Rating: {cert}</p>
        <Genres genres={genres} />
      </div>
    </div>
  )
}

export default MoviePageDetails
