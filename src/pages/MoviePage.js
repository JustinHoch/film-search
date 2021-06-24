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
    console.log(movieDetails);

    // Certification TODO: Refactor into a service
    const getCerts = (details) => {
      const certs = details.release_dates.results.filter(cert => cert.iso_3166_1 === 'US');
      const cert = [];
      if(certs[0]){
        certs[0].release_dates.forEach(element => {
          if(element.certification !== ""){
            cert.push(element.certification);
          };
        });
        if(cert.length > 0){
          console.log(cert[0]); //Update to return the rating
          return cert[0];
        }else{
          console.log("All certs are empty strings"); //Update to return false if no rating
        };
      }else{
        console.log("No US certs available");
      }
    }
    const cert = getCerts(movieDetails);

    // Watch Providers TODO: Refactor into a service
    const getWatchProviders = (details) => {
      const watchProviders = details["watch/providers"].results;
      if(watchProviders["US"]){
        console.log(watchProviders["US"]); //Update to return array of watch providers
      }else{
        console.log("no watch providers");
      };
    }
    getWatchProviders(movieDetails);

    return (
      <main className="bg-gray-600">
        <div className="p-2 flex">
          <img className="rounded w-44 mr-2" src={`http://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt="" />
          <div>
            <h2 className="text-xl font-bold text-white">{movieDetails.title}</h2>
            <p>Runtime: {movieDetails.runtime}min</p>
            <p>Rating: {cert}</p>
          </div>
        </div>

        <div className="p-2">
          <h2 className="text-lg font-bold text-white">Overview</h2>
          <p>{movieDetails.overview}</p>
        </div>

        {/* TODO: Add watch list */}
      </main>
    )
  }
}

export default MoviePage
