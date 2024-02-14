import React, { useState } from 'react';
import './Profile.css';

const Profile = (props) => {
  const [name, setName] = useState('Mark');
  const [email, setEmail] = useState('test@test.com');
  return (
    <section className="profile">
      <h1 className="profile__header">Привет, Марк!</h1>
      <form className="profile__form">
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
        <button className="profile__sbmt-btn" type="submit">
          Редактировать
        </button>
      </form>
      <button className="profile-logout" type="button">
        Выйти из аккаунта
      </button>
    </section>
  );
};

export default Profile;
