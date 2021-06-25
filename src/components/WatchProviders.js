function WatchProviders({ providers }) {
  if(providers){
    return (
      <div className="p-2">
        <h2 className="text-lg font-bold text-green-500 text-center">Watch Providers</h2>

        <h3 className="text-md font-bold text-white">Stream</h3>
        <div className="flex flex-wrap justify-evenly">
          {providers.flatrate !== undefined ? providers.flatrate.map((element, key)=>{
            const logoPath = `http://image.tmdb.org/t/p/w300${element.logo_path}`
            return (
              <div className="w-16 m-2" key={key}>
                <img className="rounded-lg" src={logoPath} alt=""></img>
              </div>
            );
          }):<div><p>No Streaming Available</p></div>}
        </div>

        <h3 className="text-md font-bold text-white">Rent</h3>
        <div className="flex flex-wrap justify-start">
          {providers.rent !== undefined ? providers.rent.map((element, key)=>{
            const logoPath = `http://image.tmdb.org/t/p/w300${element.logo_path}`
            return (
              <div className="w-16 m-2" key={key}>
                <img className="rounded-lg" src={logoPath} alt=""></img>
              </div>
            );
          }):<div><p>No Renting Available</p></div>}
        </div>

        <h3 className="text-md font-bold text-white">Buy</h3>
        <div className="flex flex-wrap justify-start">
          {providers.buy !== undefined ? providers.buy.map((element, key)=>{
            const logoPath = `http://image.tmdb.org/t/p/w300${element.logo_path}`
            return (
              <div className="w-16 m-2" key={key}>
                <img className="rounded-lg" src={logoPath} alt=""></img>
              </div>
            );
          }):<div><p>No Buying Options Available</p></div>}
        </div>

      </div>
    )
  } else {
    return null;
  }
}

export default WatchProviders
