import React from "react";
import PropType from 'prop-types';

function Movie({id, year, title, summary, poster}){
    return <h1>{title}{year}</h1>;
}

Movie.propTypes = {
    id: PropType.number.isRequired,
    year: PropType.number.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    poster: PropType.string.isRequired
};

export default Movie;