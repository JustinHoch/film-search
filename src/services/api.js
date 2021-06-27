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

// TV
export async function fetchTV(id){
  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US&append_to_response=content_ratings,watch/providers,credits`);
  const data = await res.json();
  return data;
}

// Person
export async function fetchPerson(id){
  const res = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US&append_to_response=combined_credits`);
  const data = await res.json();
  return data;
}