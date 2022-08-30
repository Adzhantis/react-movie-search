import { Routes, Route } from 'react-router-dom';
import {Home} from "pages/Home/Home";
import {MovieDetails} from "pages/MovieDetails/MovieDetails";
import { Cast } from '../pages/MovieDetails/Cast/Cast';
import { Reviews } from '../pages/MovieDetails/Reviews/Reviews';
import { Search } from '../pages/Search/Search';

export const URL_PREFIX = '/react-movie-search';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={URL_PREFIX + '/'} element={<Home />} />
        <Route path={URL_PREFIX + '/movies'} element={<Search />} />
        <Route path={URL_PREFIX + '/movie/:movieId'} element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
