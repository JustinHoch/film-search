// React Components
import { useState, useEffect } from 'react';

// API
import { fetchMovie } from '../services/api';

// Components
import Loading from '../components/Loading';
import Genres from '../components/Genres';
import Overview from '../components/Overview';
import WatchProviders from '../components/WatchProviders';
import PersonCard from '../components/PersonCard';

// Functions
import { getCerts, getWatchProviders } from '../services/functions';

function MoviePage({ match }) {
  // Get movie ID from URL
  const movieId = match.params.name;

  // State
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // UseEffect
  useEffect(() => {
    const getMovieDetails = async () => {
      const movie = await fetchMovie(movieId);
      setMovieDetails(movie);
      setIsLoaded(true);
    }
    getMovieDetails();
  }, [movieId]);

  if(!isLoaded){
    return (
      <Loading />
    )
  } else {
    console.log(movieDetails);

    const cert = getCerts(movieDetails);

    const watchProviders = getWatchProviders(movieDetails);

    const cast = movieDetails.credits.cast;

    return (
      <main className="bg-gray-600">
        <div className="p-2 flex">
          <img className="rounded w-44 mr-2" src={`http://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt="" />
          <div>
            <h2 className="text-xl font-bold text-green-500">{movieDetails.title}</h2>
            <p className="text-white mt-2">Runtime: {movieDetails.runtime}min</p>
            <p className="text-white mt-2">Rating: {cert}</p>
            <Genres genres={movieDetails.genres} />
          </div>
        </div>

        <Overview overview={movieDetails.overview} />

        <WatchProviders providers={watchProviders} />

        <h2 className="text-xl font-bold text-green-500 text-center">Cast</h2>
        <div className="flex flex-wrap justify-evenly">
          {cast.map((person, key)=>{
            return <PersonCard key={key} media={person} />
          })}
        </div>
      </main>
    )
  }
}

export default MoviePage
