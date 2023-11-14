const { useState, useEffect } = require("react");

function App () {
  const [loading, setLoading] =useState(true);
  const [movies ,setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.9&sort_by=year`
    )
    ).json();
      setMovies(json.data.movies);
      setLoading(false);
    };
  useEffect(() => {
    getMovies();
    },[]);
  console.log(movies);
  return <div>
    {loading ? <h3>Loading.... </h3> : 
    <div>{movies.map(movie => 
    <div key={movie.id}>
      <img src={movie.medium_cover_image} />
      <h3>{movie.title}</h3>
      <ul>
        {movie.genres.map((g) => 
        (<li key={(g)}>{g}</li>))}
      </ul>
      <p>{movie.summary}</p>
      </div>
    )}</div>}
  </div>;
}

export default App;