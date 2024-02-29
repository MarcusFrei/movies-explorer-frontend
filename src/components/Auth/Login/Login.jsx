import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './../Auth.css';
import './Login.css';
import logo from '../../../images/logo.svg';
import { validateLoginForm } from '../../../utils/functions';

const Login = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationError, setValidationError] = useState('');
  const [btnDsb, setBtnDsb] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setValidationError(validateLoginForm(e.target.value, password));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setValidationError(validateLoginForm(email, e.target.value));
  };

  useEffect(() => {
    if (validateLoginForm(email, password)) {
      setBtnDsb(true);
    } else setBtnDsb(false);
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="login-page auth">
      <div className="auth-header">
        <Link to="/" className="auth-header__link">
          <img src={logo} alt="Логотип" />
        </Link>
        <h1 className="login-page__title auth__title">Рады видеть!</h1>
      </div>
      <form onSubmit={handleSubmit} className="login-page__form auth__form">
        <div className="login-page__requirements auth__form-inputs">
          <div className="login-page__inputs-block">
            <p className="login-page__description auth__description">E-mail</p>
            <input
              className="login-page__input auth__input"
              placeholder="E-mail"
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            <p className="login-page__description auth__description">Пароль</p>
            <input
              className="login-page__input auth__input"
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
            className={`login-page__submit-btn auth__btn-sbmt ${
              btnDsb ? 'auth__btn-sbmt-disabled' : ''
            }`}
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
