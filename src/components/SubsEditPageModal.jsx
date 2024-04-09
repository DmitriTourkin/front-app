import React from 'react';
import AdaptiveSelect from './AdaptiveSelect';
import { useState } from 'react';

export default function SubsEditPageModal() {
  const [choosenOptions, setChoosenOptions] = useState([]);

  const handleSubmitButton = (e) => {
    e.preventDefault();

    const formedData = new FormData(e.target);
    const title = formedData.get('title');
    const price = formedData.get('price');
    const date = formedData.get('date');
    const period = formedData.get('period');

    let updatedSubscription = {
      name: title,
      category: choosenOptions,
      price: price || 0,
      data: date, 
      period: period ?? '14 дней',
    };

    let updatedSubscriptionJSON = JSON.stringify(updatedSubscription);
 
    //тут вызывает API для отправки, ключ и токены будут браться из общего useContext, помещаться в заголовки. 

    console.log(`updatedSubs: ${updatedSubscriptionJSON}`);
  }
  
  return (
    <div>
      <h1>Окно редактирования подписки</h1>
        <div className="form-wrapper">
          <div class="form-container">
            <form className="subs-form" onSubmit={handleSubmitButton}>
              <input className="subscription-title-input" name="title" placeholder="Название подписки"/>
              <div>
                <label>Категории подписки</label>
                <AdaptiveSelect choosenOptions = {choosenOptions} setChoosenOptions = {setChoosenOptions}/>
              </div>
              <div>
                <label for="price" className="form-label" type="number">Цена</label>
                <input id="price" name="price" className="form-control" type="price"/>
              </div>
              <div>
                <label for="date" className="form-label" type="date">Дата первого списания</label>
                <input id="date" name="date" className="form-control" type="datetime-local"/>
              </div>
              <div>
                <label for="time-period" className="form-label" type="">Период списания</label>
                <input id="time-period" name="time-period" className="form-control" type="date"/>
              </div>
              <button className="btn btn-dark sumbit-button" type="submit">Сохранить</button>
            </form>
          </div>
        </div>
      </div>
    );
}