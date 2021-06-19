const apiKey = process.env.REACT_APP_TMDB_API_KEY;

export async function fetchTrendingMedia(){
  const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`);
  const data = await res.json();
  return data;
}