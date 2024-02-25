import Navigation from '../Navigation/Navigation';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export default function Header({ onLogout, isAuth, email }) {
  return (
    <header className="header">
      <Link to={'/'}>
        <img className="header__logo" src={logo} alt="Логотип 'Movies'" />
      </Link>
      <Navigation isAuth={isAuth} onLogout={onLogout} email={email} />
    </header>
  );
}
