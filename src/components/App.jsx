import { Routes, Route } from 'react-router-dom';
import {Home} from "pages/Home/Home";
import {MovieDetails} from "pages/MovieDetails/MovieDetails";
import { Cast } from '../pages/MovieDetails/Cast/Cast';
import { Reviews } from '../pages/MovieDetails/Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/movies" element={<Movies />} />*/}
        <Route path="/movie/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>

    </div>
  );
};
