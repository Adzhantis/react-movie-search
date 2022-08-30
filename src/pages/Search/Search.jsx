import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './../Home/Home.module.css'
import { fetchMoviesBySearch } from '../../api/themoviedb';
import { Header } from '../../components/Header';

export const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([])

  useEffect(() => {
    let query = searchParams.get("query")

    if (query) {
      fetchMoviesBySearch(query).then(({data: {results: movies}}) => {
        console.log(movies);
        setMovies(movies)
      })
    }
    console.log(searchParams);

  }, [])

  function makeUrl(movieId) {
    return `/movie/${movieId}`;
  }

  return (
    <div>
      <Header />
      <form>
        <input name="query"/>
        <button>Search</button>
      </form>

      <ul className={styles.movieList}>
        {movies.map(movie => {
          return <li key={movie.id}><Link to={makeUrl(movie.id)}>{movie.title}</Link></li>
        })}
      </ul>

    </div>
  );
};
