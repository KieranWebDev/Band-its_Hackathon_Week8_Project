function Random ({ randomBand }) {
    return (
      <div className="band-container">
        
        <div>
          <img className="logo" src={randomBand.strArtistLogo} alt="Logo" />
          <h3>Genre</h3>
          {/* <p>{band.strArtist}</p> */}
          <p>{randomBand.strGenre}</p>
          <h3>Band bio</h3>
          <p>{randomBand.strBiographyEN}</p>
          <h3>Listen to some tracks!</h3>
          <p>
            <a href={randomBand.strLastFMChart} target="_blank">
              Click here{' '}
            </a>{' '}
            to listen to some tracks by <strong>{randomBand.strArtist}</strong>
          </p>
        </div>
        <div>
          <img
            className="band-pic"
            src={randomBand.strArtistThumb}
            alt="band thumbnail"
          />
        </div>
      </div>
    );
  }
  
  export default Random;