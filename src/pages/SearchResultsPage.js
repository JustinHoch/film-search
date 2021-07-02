// REACT COMPONENTS
import { useState, useEffect } from 'react'

// COMPONENTS
import Loading from '../components/Loading'
import MovieCard from '../components/MovieCard'
import TvCard from '../components/TvCard'
import PersonCard from '../components/PersonCard'

// API
import { fetchMultiSearch } from '../services/api'

function SearchResultsPage({ match }) {

  // Get search query from url
  const searchQuery = match.params.name

  // State
  const [searchResults, setSearchResults] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  // UseEffect
  useEffect(() => {
    const getSearchResults = async () => {
      const search = await fetchMultiSearch(searchQuery)
      setSearchResults(search)
      setIsLoaded(true)
    }
    getSearchResults()
  }, [searchQuery])

  if(!isLoaded){
    return (
      <Loading />
    )
  // Render if movie info is loaded
  } else {
    const results = searchResults.results;
    return (
      <main className="bg-gray-600">
        <h2 className="text-2xl font-bold text-green-500 text-center p-2">Search Results for: {searchQuery}</h2>

        <div className="p-2 flex flex-wrap justify-center">
          {/* TODO: Learn more about using conditionals in map (without return true I get a warning) */}
          {results.map(media => {
            if(media.media_type === "movie"){
              return <MovieCard key={media.id} media={media} />
            } else if(media.media_type === "tv"){
              return <TvCard key={media.id} media={media} />
            } else if(media.media_type === "person"){
              return <PersonCard key={media.id} media={media} />
            }
            return true;
          })}
        </div>
      </main>
    )
  }
}

export default SearchResultsPage
