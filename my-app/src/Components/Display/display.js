function Display({ band }) {
  return (
    <div className="band-container">
      <div>
        <img
          className="band-pic"
          src={band.strArtistThumb}
          alt="band thumbnail"
        />
      </div>
      <div>
        <img className="logo" src={band.strArtistLogo} alt="Logo" />
        <h3>Genre</h3>
        {/* <p>{band.strArtist}</p> */}
        <p>{band.strGenre}</p>
        <h3>Band bio</h3>
        <p>{band.strBiographyEN}</p>
        <h3>Listen to some tracks!</h3>
        <p>
          <a href={band.strLastFMChart} target="_blank">
            Click here{' '}
          </a>{' '}
          to listen to some tracks by <strong>{band.strArtist}</strong>
        </p>
      </div>
    </div>
  );
}

export default Display;
