import React, {useEffect, useState} from 'react';
import './App.css';



function App() {

  const [band, setBand] = useState([])
  const [query, setQuery] = useState()
  const [search, setSearch] = useState("coldplay")


  useEffect(() => {
    const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${search}`;
  
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const bandData = await response.json();
  
        setBand(bandData.artists[0]);
        console.log(band)
        console.log (bandData.artists[0].strArtist)
      } catch (error) {
        console.log('error', error);
      }
    };
  
    fetchData();
  },[search]);
  
 



  return (
    <div className="App">
      <h1>BAND-ITS</h1>
      <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button onClick={() => setSearch(query)}>Search</button>
        <br></br>
      {band && (<img src={band.strArtistLogo} alt = 'Logo' />)}
      {band && (<p>{band.strArtist}</p>)}
      {band && (<p>{band.strGenre}</p>)}
      
    </div>
  );
}

export default App;
