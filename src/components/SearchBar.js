// React Components
import { useState } from 'react'
import { useHistory } from "react-router";

function SearchBar() {

  // State
  const [query, setQuery] = useState('');

  // History
  const history = useHistory()

  // On Search Submit
  const onSubmit = (e) => {
    // prevent page reload
    e.preventDefault()

    // Do nothing if there is no query string
    if(!query){
      return;
    }

    // Redirect to search page
    history.push(`/search/${query}`)

    // Reset form after redirect
    let form = document.getElementById("search-form")
    form.reset()
  }

  return (
    <div className="mt-4 rounded">
      <form id="search-form" onSubmit={onSubmit}>

        <label className="hidden" htmlFor="search-input">Search Movie, TV Show, or Person</label>
        <input id="search-input" className="w-3/4 rounded-l pl-1" type="text" placeholder="Search Movie, TV Show, or Person" onChange={(e) => setQuery(e.target.value)}></input>

        <button className="w-1/4 bg-green-600 text-white rounded-r" type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBar
