import React, {useState} from 'react';
import './CostForm.css'

const CostForm = () => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHundler = (event) => {
        setDate(event.target.value);
    };

    return (
        <form>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input type="text" onChange={nameChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHundler}/>
                </div>
                <div className=".new-cost__actions">
                    <button type="submit">Добавить Расход</button>
                </div>
            </div>
        </form>
    )
}

export default CostForm;