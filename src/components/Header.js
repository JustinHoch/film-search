// React Components
import { Link } from 'react-router-dom';

// Assets
import logo from '../assets/logo.svg'

// Components
import SearchBar from './SearchBar'

function Header() {
  return (
    <header className="bg-gray-800 p-4 h-24s">
      <div className="flex items-center">
        <div>
          <Link to="/">
            <img className="inline-block mr-3 h-14" src={logo} alt="logo"/>
          </Link>
        </div>
        <h1 className="text-white text-4xl">
          Film Search
        </h1>
      </div>
      <SearchBar />
    </header>
  )
}

export default Header
