const apiKey = process.env.REACT_APP_TMDB_API_KEY;

// Trending Media
export async function fetchTrendingMedia(){
  const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`);
  const data = await res.json();
  return data;
}

// Movie
export async function fetchMovie(id){
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=release_dates,watch/providers,credits`);
  const data = await res.json();
  return data;
}