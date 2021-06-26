// REACT COMPONENTS
import { useState, useEffect } from 'react';

// API
import { fetchMovie } from '../services/api';

// COMPONENTS
import Loading from '../components/Loading';
import MoviePageDetails from '../components/MoviePageDetails';
import Overview from '../components/Overview';
import WatchProviders from '../components/WatchProviders';
import PersonCard from '../components/PersonCard';

// FUNCTIONS
import { getCerts, getWatchProviders } from '../services/functions';

// RENDER PAGE
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

  // Check if movie info is loaded
  if(!isLoaded){
    return (
      <Loading />
    )
  // Render if movie info is loaded
  } else {

    // Get US certifications
    const cert = getCerts(movieDetails);

    // Get US watch providers
    const watchProviders = getWatchProviders(movieDetails);

    return (
      <main className="bg-gray-600">

        <MoviePageDetails
          poster={movieDetails.poster_path}
          title={movieDetails.title}
          runtime={movieDetails.runtime}
          cert={cert}
          genres={movieDetails.genres}
        />

        <Overview overview={movieDetails.overview} />

        <WatchProviders providers={watchProviders} />

        <h2 className="text-xl font-bold text-green-500 text-center">Cast</h2>
        <div className="flex flex-wrap justify-evenly">
          {movieDetails.credits.cast.map((person, key)=>{
            return <PersonCard key={key} media={person} />
          })}
        </div>
      </main>
    )
  }
}

export default MoviePage
