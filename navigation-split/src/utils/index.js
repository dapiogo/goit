import { movies } from "../api"

export const getMovies = () => {
    return movies
}

export const findMovieById = (id) => movies.find(movie => movie.id === id)