import React from 'react';
import '../styles/df.css';

export default function Auth() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <form className="auth-form">
          <h4 className="form-title">Войти</h4>
          <label for="email">Почта</label>
          <input className="form-control" id="email" placeholder="Введите почту" type="email"></input>
          <label for="password">Пароль</label>
          <input className="form-control" id="password" type="password" placeholder="Введите пароль"></input>
          <button className="btn btn-dark" type="submit" onClick={(e) => handleFormSubmit(e)}>Войти</button>
        </form>
      </div>
    </div>
  );
};