import PropTypes from "prop-types";


function Movie({coverImg,title,summary,genres}) {
    return <div>
    <img src={coverImg} alt={title} />
    <h3>{title}</h3>
    <ul>
        {genres.map((g) => 
        (<li key={(g)}>{g}</li>))}
    </ul>
    <p>{summary}</p>
    </div>
}

Movie.propTypes = {
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
