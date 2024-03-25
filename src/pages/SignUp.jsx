import React from 'react';
import '../styles/df.css';

export default function SignUp() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <form class="auth-form" autoComplete="off">
          <h4 className="form-title">Пользовательская регистрация</h4>
          <label for="email" className="form-label">Почта</label>
          <input className="form-control" id="email" placeholder="Введите почту" type="email"></input>
          <label for="name" className="form-label">Имя</label>
          <input className="form-control" id="name" placeholder="Введите имя" type="text"></input>
          <label for="surname" className="form-label">Фамилия</label>
          <input className="form-control" id="surname" placeholder="Введите фамилию" type="text"></input>
          <label for="password" className="form-label">Пароль</label>
          <input className="form-control" id="password" type="password" placeholder="Введите пароль"></input>
          <button className="btn btn-dark" type="submit" onClick={(e) => handleFormSubmit(e)}>Войти</button>
        </form>
      </div>
    </div>
  );
};