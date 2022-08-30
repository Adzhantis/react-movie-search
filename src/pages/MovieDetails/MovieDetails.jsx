import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import styles from './MovieDetails.module.css'
import { fetchMovie, IMG_PREFIX } from '../../api/themoviedb';
import { Header } from '../../components/Header';

export const MovieDetails = () => {

  const { movieId } = useParams();
  const [movie, setMovie] = useState({})

  useEffect(() => {
    fetchMovie(movieId).then(({ data }) => {
      console.log(data);
      setMovie(data)
    })
  }, [movieId])

  if (movie.poster_path === undefined) {
    return <>Still loading...</>;
  }

  return (
    <div>
      <Header />
      <div>
        <Link to="/">Go back</Link>
      </div>

      <div className={styles.movieDetailsWrapper}>
        <img src={IMG_PREFIX + movie.poster_path} alt={movie.original_title}/>

        <div className={styles.movieDetailsDataWrapper}>
          <h3>{movie.original_title} ({movie.release_date.split('-')[0]})</h3>
          <p>User Score: {movie.vote_average}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
        </div>
      </div>

      <hr />
      <nav className={styles.additionalLinks}>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <hr />

      <Outlet />

    </div>
  );
};
