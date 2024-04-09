import React from 'react';
import { useState, useCallback, useMemo, useRef } from 'react';
import '../styles/df.css';
import AdaptiveSelect from './AdaptiveSelect';


export default function SubsCreateModal() {
  const [choosenOptions, setChoosenOptions] = useState([]);

  const handleSubmitButton = (e) => {
    e.preventDefault();
    let newSubscription = {
      name: e.target.form.elements['name'],
      category: [choosenOptions],
      price: e.target.element['price'],
      data: e.target.element['data'], 
      period: e.target.element['period'],
    };

    console.log(newSubscription);
  };

  return (
    <div className="form-wrapper">
      <div class="form-container">
        <form className="subs-form">
          <input className="subscription-title-input" placeholder="Название подписки"></input>
          <div>
            <label>Категории подписки</label>
            <AdaptiveSelect choosenOptions = {choosenOptions} setChoosenOptions = {setChoosenOptions}/>
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
            <label for="period" className="form-label">Период списания</label>
            <select className='form-select'>
              <option>2</option>
              <option>12</option>
              <option>14</option>
              <option>25</option>
            </select>
          </div>
          <button className="btn btn-dark sumbit-button" type="submit" onClick={(e) => handleSubmitButton(e)}>Создать</button>
        </form>
      </div>
    </div>
  );
}