// import React, { useState } from 'react';
// import { auth } from '../../../api/auth';
import { Link } from 'react-router-dom';
import './../Auth.css';
import './Register.css';
import logo from '../../../images/logo.svg';

const Register = (props) => {
  return (
    <div className="register-page auth">
      <div className="auth__header">
        <img src={logo} className="" alt="logo" />
        <h1 className="register-page__title auth__title">Добро пожаловать!</h1>
      </div>
      <form className="register-page__form auth__form">
        <div className="register-page__inputs-block">
          <p className="register-page__description auth__description">Имя</p>
          <input
            className="register-page__input auth__input"
            placeholder="Имя"
            name="name"
            type="string"
          />
          <p className="register-page__description auth__description">E-mail</p>
          <input
            className="register-page__input auth__input"
            placeholder="E-mail"
            name="email"
            type="email"
          />
          <p className="register-page__description auth__description">Пароль</p>
          <input
            className="register-page__input auth__input"
            placeholder="Пароль"
            name="password"
            type="password"
          />
        </div>
        <button
          type="submit"
          className="register-page__submit-btn auth__btn_sbmt"
        >
          Зарегистрироваться
        </button>
        <p className="register-page__hint auth__hints">
          Уже зарегистрированы?{' '}
          <Link
            to="/signin"
            className="register-page__hint-link auth__hint-link"
          >
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
