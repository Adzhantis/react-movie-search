import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'
import { fetchTrending } from '../../api/themoviedb';
import { Header } from '../../components/Header';

export const Home = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchTrending().then(({data: {results: movies}}) => {
      console.log(movies);
      setMovies(movies)
    })
  }, [])

  function makeUrl(movieId) {
    return `movie/${movieId}`;
  }

  return (
    <div>
      <Header />
      <h1>Trending today</h1>

      <ul className={styles.movieList}>
        {movies.map(movie => {
          return <li key={movie.id}><Link to={makeUrl(movie.id)}>{movie.title}</Link></li>
        })}
      </ul>

    </div>
  );
};
