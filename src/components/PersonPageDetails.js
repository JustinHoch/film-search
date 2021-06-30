function PersonPageDetails({ poster, name, genderNum, birthday, deathday, place_of_birth }) {

  const gender = {1: 'Female', 2: 'Male', 3: 'Other'}

  // Calculate age based on wether the person is alive or not
  const birthdayCalc = (birthday, deathday) => {
    const birthParse = new Date(birthday)
    if(deathday !== null){
      const deathParse = new Date(deathday)
      const ageDiff = deathParse.getTime() - birthParse.getTime()
      const ageDate = new Date(ageDiff)
      const age = Math.abs(ageDate.getUTCFullYear() - 1970)
      return <p className="text-white mt-2">
        <b>Birthday:</b><br></br>
        <i>{birthday}</i><br></br>
        <b>Day of Death:</b><br></br>
        <i>{deathday} (age: {age})</i>
      </p>
    } else {
      const ageDiff = Date.now() - birthParse.getTime()
      const ageDate = new Date(ageDiff)
      const age = Math.abs(ageDate.getUTCFullYear() - 1970)
      return <p className="text-white mt-2">
        <b>Birthday:</b><br></br>
        <i>{birthday} (age: {age})</i><br></br>
      </p>
    }
  }

  return (
    <div className="p-2 flex">
      <img className="rounded w-44 mr-2" src={`http://image.tmdb.org/t/p/w342${poster}`} alt="" />
      <div>
        <h2 className="text-xl font-bold text-green-500">{name}</h2>
        <p className="text-white mt-2"><b>Gender:</b><br></br>
          <i>{gender[genderNum]}</i>
        </p>
        {birthdayCalc(birthday, deathday)}
        <p className="text-white mt-2"><b>Place of Birth:</b><br></br>
          <i>{place_of_birth}</i>
        </p>
      </div>
    </div>
  )
}

export default PersonPageDetails
