import { Routes, Route } from 'react-router-dom';
import {Home} from "pages/Home/Home";
import {MovieDetails} from "pages/MovieDetails/MovieDetails";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/movies" element={<Movies />} />*/}
        <Route path="/movie/:movieId" element={<MovieDetails />}>
          <Route path="/movie/:movieId/cast" element={<MovieDetails />} />
          <Route path="/movie/:movieId/reviews" element={<MovieDetails />} />
        </Route>
      </Routes>
    </div>
  );
};
