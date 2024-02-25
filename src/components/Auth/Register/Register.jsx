import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './../Auth.css';
import './Register.css';
import logo from '../../../images/logo.svg';

const Register = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, email, password);
  };
  return (
    <div className="register-page auth">
      <div className="auth-header">
        <Link to="/" className="auth-header__link">
          <img src={logo} alt="Логотип" />
        </Link>
        <h1 className="register-page__title auth__title">Добро пожаловать!</h1>
      </div>
      <form onSubmit={handleSubmit} className="register-page__form auth__form">
        <div className="register-page__inputs-block">
          <p className="register-page__description auth__description">Имя</p>
          <input
            className="register-page__input auth__input"
            placeholder="Имя"
            name="name"
            type="string"
            value={name}
            onChange={(e) => handleNameChange(e)}
          />
          <p className="register-page__description auth__description">E-mail</p>
          <input
            className="register-page__input auth__input"
            placeholder="E-mail"
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <p className="register-page__description auth__description">Пароль</p>
          <input
            className="register-page__input auth__input"
            placeholder="Пароль"
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          type="submit"
          className="register-page__submit-btn auth__btn-sbmt"
        >
          Зарегистрироваться
        </button>
        <div className="register-page__hint auth__hints">
          Уже зарегистрированы?{' '}
          <Link
            to="/signin"
            className="register-page__hint-link auth__hint-link"
          >
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
