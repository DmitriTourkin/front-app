import React from 'react';
import AdaptiveSelect from './AdaptiveSelect';

export default function SubsEditPageModal() {

  const handleSubmitButton = () => {
    return null;
  }
  
  return (
    <div>
      <h1>Окно редактирования подписки</h1>
        <div className="form-wrapper">
          <div class="form-container">
            <form className="subs-form">
              <input className="subscription-title-input" placeholder="Название подписки"></input>
              <div>
                <label>Категории подписки</label>
                <AdaptiveSelect/>
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
      </div>
    );
}