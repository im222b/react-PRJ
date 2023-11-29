import { useEffect, useState } from "react";
import Movie from "../components/movie";


function Home() {
    const [loading, setLoading] =useState(true);
    const [movies ,setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
        await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    )
    ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect( () => {
    getMovies();
    },[]);
    return (<div className="main">
    {loading ? (<h1 style={{
        width:"1200px",
        height:"600px",
        margin:"0 auto",
        marginTop:"300px",
        textAlign:"center"
    }}>Loading.... </h1>
    ) : ( 
        <div >

            
            <div >
                {movies.map((movie) => (
                <Movie 
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image} 
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres} 
                />  
                ))}
            </div>
            
        </div>
        )}
    </div>
);
            }

export default Home;