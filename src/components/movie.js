import PropTypes from "prop-types";
import {Link}from "react-router-dom";
import "../css/main.css"



function Movie({id,coverImg,title,summary,genres}) {
    return ( 
    <div className="part">
        <div className="imges">
            <img src={coverImg} alt={title} />
        </div>
        <div className="title">    
            <div >
                <h2>
                    <Link to ={`/movie/${id}`}>{title}</Link>
                </h2>
            </div>
            <div className="genre">
                    <ul>
                        {genres.map((g) => (
                        <li key={(g)}>{g}</li>
                        ))}
                    </ul>
            </div>
                
            <div>
                    <p>{summary.length > 235 ? `${summary.slice(0,335)}...`:summary}</p>
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
