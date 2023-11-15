import PropTypes from "prop-types";
import {Link}from "react-router-dom";
import "../css/main.css"

function Movie({id,coverImg,title,summary,genres}) {
    return ( 
    <div className="part">
        <div>
            <img src={coverImg} alt={title} />
        </div>
        <div className="title">    
            <div className="imges">
                <h1>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h1>
            </div>
            <div>
                    <ul>
                        {genres.map((g) => (
                        <li key={(g)}>{g}</li>
                        ))}
                    </ul>
            </div>
                
            <div>
                    <p>{summary}</p>
            </div>
        </div>
    </div>
)}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
