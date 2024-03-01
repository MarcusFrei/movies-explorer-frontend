import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import { UserContext } from '../../../context/UserContext';
import { validateForm } from '../../../utils/functions';

const Profile = ({ changeUserInfo, logout }) => {
  const user = useContext(UserContext);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dsbButton, setDsbButton] = useState(true);
  const [isDataChanged, setIsDataChanged] = useState(false);

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]);

  useEffect(() => {
    if (isDisabled()) {
      setError(validateForm(name, email));
      setDsbButton(true);
    } else {
      setError('');
      setDsbButton(false);
    }
    setIsDataChanged(false);
  }, [name, email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      changeUserInfo(name, email);
      setIsDataChanged(true);
      setError('');
    } catch (error) {
      setError('Проблема с backend частью');
      setIsDataChanged(false);
    }
  };

  const isDisabled = () =>
    (name === user.name && email === user.email) ||
    validateForm(name, email).length > 0;

  return (
    <section className="profile">
      <h1 className="profile__header">Привет, {user.name}!</h1>
      <form onSubmit={handleSubmit} className="profile__form">
        <div className="profile-row">
          <span className="profile-row__desc">Имя</span>
          <input
            className="profile-row__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <hr className="profile-line" />
        <div className="profile-row">
          <span className="profile-row__desc">E-mail</span>
          <input
            className="profile-row__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <p className="profile__error">{error}</p>
        {isDataChanged && (
          <p className="profile__success">Вы изменили данные!</p>
        )}
        <button
          disabled={dsbButton}
          className={`profile__sbmt-btn ${
            dsbButton ? 'profile__sbmt-btn-disabled' : ''
          }`}
          type="submit"
        >
          Редактировать
        </button>
      </form>
      <button className="profile-logout" type="submit" onClick={logout}>
        Выйти из аккаунта
      </button>
    </section>
  );
};

export default Profile;
