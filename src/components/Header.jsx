import { Link } from 'react-router-dom';
import styles from './App.module.css'

export const Header = () => {

  return (
    <nav className={styles.header}>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
  );
};
