import { useEffect } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";
import { getMovies } from "../utils"

const Movies = () => {
    const movies = getMovies();
    const [searchParams,setSearchParams] = useSearchParams();
    const location = useLocation();
    const movieName = searchParams.get('name') ?? ""
    const ageMovie = searchParams.get('new') ?? false

   
    const handleInput = (name) => {
        const params = name !=="" ? {name} : {}
        setSearchParams(params)
    }

    const filteredMovies = movies.filter((movie) => {
        const movieNameLowerCase = movieName.toLowerCase();

        return movie.name.toLowerCase().includes(movieNameLowerCase)
    }).filter((movie) => {
        const isNewMovie = movie.new === true;
        return ageMovie ? isNewMovie : movie
    })

    console.log(location)

    useEffect(()=> {
        if(location.state) {
            setSearchParams(location.state)
        }
    },[])

    return (
        <div>
            <input type="text" value={movieName} onChange={(e)=> handleInput(e.target.value)}/>
            <div className="product-wrapper">
                {filteredMovies.map(el => (
                    <div className="product" key={el.id}>
                        <img src="https://via.placeholder.com/200x100" alt="" />
                        <p>{el.name}</p>
                        <div>{el.new ? "New movie" : "Old movie"}</div>
                        <Link to={`${el.id}`}>Go to detail movie</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Movies