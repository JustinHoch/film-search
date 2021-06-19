function TvCard({media}) {
  const smPosterPath = `http://image.tmdb.org/t/p/w342${media.poster_path}`;
  return (
    <div className="w-40 m-2">
      <img className="rounded" src={smPosterPath} alt="" />
      <div className="p-1 text-white">
        <h3 className="font-bold">{media.name}</h3>
        <p className="font-light text-sm">Release Date: {media.first_air_date}</p>
      </div>
    </div>
  )
}

export default TvCard
