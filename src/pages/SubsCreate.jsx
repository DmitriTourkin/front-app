import React from 'react';
import { useState, useCallback, useMemo, useRef } from 'react';
import '../styles/df.css';


export default function SubsCreate() {
  const handleSubmitButton = (e) => {
    e.preventDefault();

  }

  return (
    <div className="form-wrapper">
      <div class="form-container">
        <form className="subs-form">
          <input className="subscription-title-input" placeholder="Название подписки"></input>

          <div>
            <label>Категории подписки</label>
            <select className="form-select">
                <option value="1">Музыкальная</option>
                <option value="2">Образование</option>
                <option value="3">Искусство</option>
            </select>
          </div>
          
          <div>
            <label for="price" className="form-label" type="number">Цена</label>
            <input id="price" name="price" className="form-control" type="price"></input>
          </div>
          <div>
            <label for="date" className="form-label" type="date">Дата первого списания</label>
            <input id="date" name="date" className="form-control" type="datetime-local"></input>
          </div>
          <div>
            <label for="time-period" className="form-label" type="">Период списания</label>
            <input id="time-period" name="time-period" className="form-control" type="date"></input>
          </div>
          <button className="btn btn-dark sumbit-button" type="submit" onClick={() => handleSubmitButton}>Создать</button>
        </form>
      </div>
    </div>
  );
}