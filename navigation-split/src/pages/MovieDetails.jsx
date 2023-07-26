import { useParams,Link } from 'react-router-dom';
import { Details } from '../components/Details';
import { findMovieById } from '../utils';

const DEFAULT_MOVIE = {
    id:'none',
    name:'none',
    new: false
}

export const MovieDetails = () => {
    const params = useParams();
    
    console.log(params)

    const movieDetail = params.movieId ?  findMovieById(params.movieId) : DEFAULT_MOVIE

    console.log(movieDetail)

    return (
        <div>
            <Link to="/movies">Back to movies</Link>
            <Details id={movieDetail.id} name={movieDetail.name} isNew={movieDetail.new}/>
        </div>
    )
}