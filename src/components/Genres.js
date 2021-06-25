function Genres({ genres }) {
  return (
    <p>Genres:&nbsp;
      {genres.map(genre => {
        return genre.name + " ";
      })}
    </p>
  )
}

export default Genres
