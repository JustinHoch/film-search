// React Components
import { useState, useEffect } from 'react';

// API
import * as api from '../services/api';

function MoviePage({ match }) {
  // Get movie ID from URL
  const movieId = match.params.name;

  // State
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // UseEffect
  useEffect(() => {
    const getMovieDetails = async () => {
      const movie = await api.fetchMovie(movieId);
      setMovieDetails(movie);
      setIsLoaded(true);
    }
    getMovieDetails();
  }, [movieId]);

  if(!isLoaded){
    return (
      <main>
        <h2>Loading...</h2>
      </main>
    )
  } else {
    return (
      <main className="bg-gray-600">
        <div className="p-2">
          <img className="rounded w-44" src={`http://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt="" />
        </div>
      </main>
    )
  }
}

export default MoviePage
