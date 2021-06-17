import logo from '../assets/logo.svg'
import SearchBar from './SearchBar'

function Header() {
  return (
    <header className="bg-gray-600 p-4 h-24s">
      <div className="inline-block">
        <img className="inline-block mr-3 h-10" src={logo} alt="logo"/>
      </div>
      <h1 className="text-white text-xl inline-block">
        Film Search
      </h1>
      <SearchBar />
    </header>
  )
}

export default Header
