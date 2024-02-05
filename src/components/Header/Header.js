import Navigation from '../Navigation/Navigation';
import './Header.css';
import logo from '../../images/logo.svg';

export default function Header({ onLogout, isAuth, email }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Лого 'Movies'" />
      <Navigation isAuth={isAuth} onLogout={onLogout} email={email} />
    </header>
  );
}
