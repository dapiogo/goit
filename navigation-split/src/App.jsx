import './App.css';
import { Route, Routes } from "react-router-dom";
// import { Home } from './pages/Home';
import { CommonLayout } from './components/CommonLayout';
// import { Information } from './pages/Information';
// import { Movies } from './pages/Movies';
import { MovieDetails } from './pages/MovieDetails';
import { lazy } from 'react';

const Home = lazy(()=> import("./pages/Home"))
const Information = lazy(()=> import("./pages/Information"))
const Movies = lazy(()=> import("./pages/Movies"))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="information" element={<Information/>}/>
        <Route path="movies" element={<Movies/>}/>
        <Route path="movies/:movieId" element={<MovieDetails/>}/>
      </Route>
    </Routes>
  )
}
