import { Link } from 'react-router-dom';
import styles from './App.module.css'
import { URL_PREFIX } from './App';

export const Header = () => {

  return (
    <nav className={styles.header}>
      <Link to={URL_PREFIX + '/'}>Home</Link>
      <Link to={URL_PREFIX + '/movies'}>Movies</Link>
    </nav>
  );
};
