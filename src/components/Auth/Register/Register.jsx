import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './../Auth.css';
import './Register.css';
import logo from '../../../images/logo.svg';
import { validateRegisterForm } from '../../../utils/functions';

const Register = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [validationError, setValidationError] = useState('');
  const [btnDsb, setBtnDsb] = useState(true);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setValidationError(validateRegisterForm(name, e.target.value, password));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setValidationError(validateRegisterForm(name, email, e.target.value));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setValidationError(validateRegisterForm(e.target.value, email, password));
  };

  useEffect(() => {
    if (validateRegisterForm(name, email, password)) {
      setBtnDsb(true);
    } else setBtnDsb(false);
  }, [name, email, password]);

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
        {validationError && <p className="auth__error">{validationError}</p>}
        <button
          disabled={btnDsb}
          type="submit"
          className={`register-page__submit-btn auth__btn-sbmt ${
            btnDsb ? 'auth__btn-sbmt-disabled' : ''
          }`}
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
