import '../components/adaptive-select.css'; 
import { useState, useRef, useMemo} from 'react';

export default function AdaptiveSelect(props) {
  const [categoriesData, setData] = useState([]); //категории с сервера через API, чтобы использовать id, value; 

  const [showed, setShowed] = useState(false);
  const [choosenOptions, setChoosenOptions] = [props.choosenOptions, props.setChoosenOptions];

  const selectHeaderRef = useRef(null);
  const selectBodyRef = useRef(null);
  const categoryText = useRef(null);

  const toggleSelectBody = () => {
    setShowed(!showed); // Изменяем состояние видимости
    if (selectBodyRef.current) {
      selectBodyRef.current.classList.toggle('show'); // Добавляем/удаляем класс 'show'
    }
  };

  const handleCheckboxChange = useMemo(() => (value) => {
    const updatedOptions = choosenOptions.includes(value) 
      ? choosenOptions.filter(option => option !== value) 
      : [...choosenOptions, value];
    setChoosenOptions(updatedOptions);
    console.log('chooseOptions: ', updatedOptions);
  }, [choosenOptions]);


  return (
    <div className="custom-select-wrapping">
      <div className="custom-select">
        <div className="select-header"  id="resizable" ref={selectHeaderRef} onClick={toggleSelectBody}>
          {choosenOptions.length === 0 ? <p ref={categoryText}> Категории в виде квадратиков будут здесь</p>: ""}
          {choosenOptions.map(option => {
            return (<div className='chosen-category'>{option}</div>)
          })}
        </div>
        <div className={`select-body ${showed ? 'show' : ''}`} ref={selectBodyRef}>
        <div className="select-item" onClick={() => handleCheckboxChange("Значение 1")}>
          <div className="select-item-body">
            <input type="checkbox" className="hidden-checkbox" checked={choosenOptions.includes("Значение 1")}/>
            <span className="pseudo-checkbox"></span>
            <p className="select-value">Значение 1</p>
          </div>
        </div>

        <div className="select-item" onClick={() => handleCheckboxChange("Значение 2")}>
          <div className="select-item-body">
            <input type="checkbox" className="hidden-checkbox" checked={choosenOptions.includes("Значение 2")}/>
            <span className="pseudo-checkbox"></span>
            <p className="select-value">Значение 2</p>
          </div>
        </div>

        <div className="select-item" onClick={() => handleCheckboxChange("Значение 3")}>
          <div className="select-item-body">
            <input type="checkbox" class="hidden-checkbox" checked={choosenOptions.includes("Значение 3")}/>
             <span className="pseudo-checkbox"></span>
            <p className="select-value">Значение 3</p>
          </div>
        </div>

        <div className="select-item" onClick={() => handleCheckboxChange("Значение 4")}>
          <div className="select-item-body">
            <input type="checkbox" class="hidden-checkbox" checked={choosenOptions.includes("Значение 4")}/>
             <span className="pseudo-checkbox"></span>
             <p className="select-value">Значение 4</p>
          </div>
        </div>

        <div className="select-item" onClick={() => handleCheckboxChange("Значение 5")}>
          <div className="select-item-body">
            <input type="checkbox" className="hidden-checkbox" checked={choosenOptions.includes("Значение 5")}/>
             <span className="pseudo-checkbox"></span>
            <p className="select-value">Значение 5</p>
          </div>
        </div>

        <div className="select-item" onClick={() => handleCheckboxChange("Значение 6")}>
          <div className="select-item-body">
            <input type="checkbox" className="hidden-checkbox" checked={choosenOptions.includes("Значение 6")}/>
             <span className="pseudo-checkbox"></span>
            <p className="select-value">Значение 6</p>
          </div>
        </div>

        <div className="select-item" onClick={() => handleCheckboxChange("Значение 7")}>
          <div className="select-item-body">
            <input type="checkbox" className="hidden-checkbox" checked={choosenOptions.includes("Значение 7")}/>
             <span className="pseudo-checkbox"></span>
            <p className="select-value">Значение 7</p>
          </div>
        </div>

      </div>
    </div>
  </div>
  );
}