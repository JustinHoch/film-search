// React Components
import { useState, useEffect } from 'react'

// API
import { fetchPerson } from '../services/api'

// Components
import Loading from '../components/Loading'

function PersonPage({ match }) {
  // Get movie ID from URL
  const personId = match.params.name

  // State
  const [personDetails, setPersonDetails] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  // UseEffect
  useEffect(() => {
    const getPersonDetails = async () => {
      const person = await fetchPerson(personId)
      setPersonDetails(person)
      setIsLoaded(true)
    }
    getPersonDetails()
  }, [personId])

  // Check if movie info is loaded
  if(!isLoaded){
    return (
      <Loading />
    )
  // Render if movie info is loaded
  } else {
    return (
      <main className="bg-gray-600">
        <h2>{personDetails.name}</h2>
      </main>
    )
  }
}

export default PersonPage
