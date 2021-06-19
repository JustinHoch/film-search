function PersonCard({media}) {
  const smPosterPath = `http://image.tmdb.org/t/p/w342${media.profile_path}`;
  return (
    <div className="w-40 p-2">
      <img className="rounded" src={smPosterPath} alt="" />
      <div className="p-1 text-white">
        <h3 className="font-bold">{media.name}</h3>
      </div>
    </div>
  )
}

export default PersonCard
