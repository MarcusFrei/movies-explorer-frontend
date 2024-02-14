import { Link } from 'react-router-dom';
import React from 'react';
import './../Auth.css';
import './Login.css';
import logo from '../../../images/logo.svg';

const Login = (props) => {
  return (
    <div className="login-page auth">
      <div className="auth-header">
        <Link to="/" className="auth-header__link">
          <img src={logo} alt="Логотип" />
        </Link>
        <h1 className="login-page__title auth__title">Рады видеть!</h1>
      </div>
      <form className="login-page__form auth__form">
        <div className="login-page__requirements auth__form-inputs">
          <div className="login-page__inputs-block">
            <p className="login-page__description auth__description">E-mail</p>
            <input
              className="login-page__input auth__input"
              placeholder="E-mail"
              name="email"
              type="email"
            />
            <p className="login-page__description auth__description">Пароль</p>
            <input
              className="login-page__input auth__input"
              placeholder="Пароль"
              name="password"
              type="password"
            />
          </div>
          <button
            type="submit"
            className="login-page__submit-btn auth__btn-sbmt"
          >
            Войти
          </button>
          <div className="login-page__hint auth__hints">
            Ещё не зарегистрированы?{' '}
            <Link
              to="/signup"
              className="login-page__hint-link auth__hint-link"
            >
              Регистрация
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
