// Missing image
import missingImage from '../assets/missing-image.jpg';

function PersonCard({media}) {
  let smPosterPath = `http://image.tmdb.org/t/p/w342${media.profile_path}`;
  if(!media.profile_path){
    smPosterPath = missingImage;
  }
  return (
    <div className="w-40 p-2">
      <img className="rounded" src={smPosterPath} alt="" />
      <div className="p-1 text-white">
        <h3 className="font-bold">{media.name}</h3>
        {media.character ? (
          <p>{media.character}</p>
        ):null}
      </div>
    </div>
  )
}

export default PersonCard
