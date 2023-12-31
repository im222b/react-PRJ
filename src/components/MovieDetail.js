import {Link}from "react-router-dom";
import "../css/detail.css";

function MovieDetail({ title, src, description, genres, url, rating }) 
{
    return (
    <div idName="detailmain">
        
        <div className="detailpart">
            
            <div className="title">
                <h1>
                    <a href={url} target="_blank">
                    {title}
                    </a>
                </h1>
            </div>
            
            <div className="list">
                <div className="imge">
                    <img src={src} alt={title} />
                </div>
                
                <div className="detailList">
                    
                    <div className="rating">
                        <h4>Movie Rating: {rating}</h4>
                        
                        <div className="genres">
                            
                            <ul>
                                {genres.map((genre, index) => (
                                <li key={index}>{genre}</li>
                                ))}
                            </ul>
                            <div>
                            <h4>Description</h4>
                                <div className="description">
                                    
                                    
                                    <p /> {description}

                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    

                    

                </div>
            </div>
            
            
                
            
        </div>
        
        <br />
        <hr />
        
        <div className="site">
            <a href={url} target="_blank">
                Go to the site&rarr;
            </a>
            <p />
            <Link to="/react-PRJ">Go to the Movie List &rarr;</Link>
        </div>
        
    </div>
    );
} 

    export default MovieDetail;    