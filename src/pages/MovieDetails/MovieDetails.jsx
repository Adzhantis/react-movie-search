import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './MovieDetails.module.css'
import { fetchMovie } from '../../api/themoviedb';

const IMG_PREFIX = 'https://image.tmdb.org/t/p/w200'

export const MovieDetails = () => {

  const { movieId } = useParams();
  const [movie, setMovie] = useState({})

  useEffect(() => {
    fetchMovie(movieId).then(({ data }) => {
      console.log(data);
      setMovie(data)
    })
  }, [])

  return (
    <div>
      <nav className={styles.header}>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>

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
      <nav className={styles.header}>
        <Link to="/">Cast</Link>
        <Link to="/movies">Reviews</Link>
      </nav>
      <hr />

    </div>
  );
};
