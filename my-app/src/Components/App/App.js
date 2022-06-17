import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import './App.css';
import Random from '../Random Band Display/Random';

function App() {
  const [band, setBand] = useState([]);
  const [query, setQuery] = useState();
  const [search, setSearch] = useState('the kooks');
  const [id, setId] = useState()
  const [randomBand, setRandomBand] = useState()


  useEffect(() => {
    const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${search}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const bandData = await response.json();

        setBand(bandData.artists[0]);
        console.log(band);
        console.log(bandData.artists[0].strArtist);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, [search]);

  useEffect(() => {
    const url = `https://theaudiodb.com/api/v1/json/2/artist.php?i=${id}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const randomBandData = await response.json();

        setRandomBand(randomBandData.artists[0]);
        console.log(randomBandData);
        console.log(randomBandData.artists[0].strArtist);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, [id]);

  function randomGen() {
    setId(Math.floor(Math.random() * (116000 - 111500) + 111500));
    console.log(id);
  ;
  }


  return (
    <div className="App">
      <h1>BAND-ITS</h1>
      <h2> Search for your favorite band or artist below!</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="type here.."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />{' '}
        <button onClick={() => setSearch(query)}>Search</button>
       
      </div>
      {band && <Display band={band} />}

      <div className="random-band-display">
        <h2>Click Below To Discover a New Band! </h2>
        <div className="random-button-div">
        <button className="random-buttom" onClick={randomGen}> Click Here</button>
        </div>
      {randomBand && <Random randomBand={randomBand} />}
      </div>
    </div>
  );
}

export default App;
