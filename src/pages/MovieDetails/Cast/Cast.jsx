import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast, IMG_PREFIX } from '../../../api/themoviedb';

export const Cast = () => {

  const { movieId } = useParams();
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetchMovieCast(movieId).then(({ data:{cast : actors} }) => {
      console.log(actors);
      setActors(actors)
    })
  }, [movieId])

  if (actors.length === 0) {
    return;
  }

  return (
    <ul>
      {actors.map( ({ id, name, character, profile_path }) => {
        if (profile_path) {
          return <li key={id}>
            <img src={IMG_PREFIX + profile_path} alt={name} width="80" />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        }
      })}
    </ul>
  );
};
