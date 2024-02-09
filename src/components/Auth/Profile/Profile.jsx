import React from 'react';
import './Profile.css';

const Profile = (props) => {
  return (
    <section className="profile">
      <h1 className="profile__header">Привет, Марк!</h1>
      <form className="profile__form">
        <div className="profile-row">
          <span className="profile-row__desc">Имя</span>
          <input className="profile-row__input" value="Mark" />
        </div>
        <hr className="profile-line" />
        <div className="profile-row">
          <span className="profile-row__desc">E-mail</span>
          <input className="profile-row__input" value="test@test.com" />
        </div>
        <button className="profile__sbmt-btn">Редактировать</button>
      </form>
      <button className="profile-logout">Выйти из аккаунта</button>
    </section>
  );
};

export default Profile;
