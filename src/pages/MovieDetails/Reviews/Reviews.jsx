import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../../api/themoviedb';

export const Reviews = () => {

  const { movieId } = useParams();
  const [reviews, setReviews] = useState([])
  const [noReviewsText, setNoReviewsText] = useState('')

  useEffect(() => {
    fetchMovieReviews(movieId).then(({ data : {results : reviews}}) => {
      console.log(reviews);
      setReviews(reviews)

      if (reviews.length === 0) {
        setNoReviewsText('No reviews found for this movie')
      }

    })
  }, [movieId])

  if (reviews.length === 0) {
    return <>{noReviewsText}</>;
  }

  return (
    <ul>
      {reviews.map( ({ id, author, content }) => {
        return <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      })}
    </ul>
  );
};
