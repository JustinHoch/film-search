// Function to get a single certification from Movie or Tv query
export function getCerts(details){
  const certs = details.release_dates.results.filter(cert => cert.iso_3166_1 === 'US');
  const cert = [];
  if(certs[0]){
    certs[0].release_dates.forEach(element => {
      if(element.certification !== ""){
        cert.push(element.certification);
      };
    });
    if(cert.length > 0){
      console.log(cert[0]);
      return cert[0];
    }else{
      console.log("All certs are empty strings");
      return "N/A";
    };
  }else{
    console.log("No US certs available");
    return "N/A";
  }
}

// Function to check for US watch providers
export function getWatchProviders(details){
  const providers = details["watch/providers"].results;
  if(providers["US"]){
    const providersList = providers["US"];
    delete providersList.link;
    console.log(providersList);
    return providersList;
  }else{
    console.log("no watch providers");
    return false;
  };
}