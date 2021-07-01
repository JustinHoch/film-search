function Biography({ biography }) {
  if(biography){
    return (
      <div className="p-2">
        <h2 className="text-lg font-bold text-green-500 text-center">Biography</h2>
        <p className="text-white">{biography}</p>
      </div>
    )
  } else {
    return null;
  }
}

export default Biography
