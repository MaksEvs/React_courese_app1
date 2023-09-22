import { useState } from 'react'
import CostForm from './CostForm'
import './NewCost.css'


const NewCost = (props) => {
    const [showCostForm, setShowCostForm] = useState(false);


    const saveCostDataHandler = (inputCostDate) => {
        const costDate = {
            ...inputCostDate,
            id: Math.random().toString()
        }
        
        props.onAddCost(costDate);
    }

    const getFormContent = () => {
        if (showCostForm === true) {
            return (<CostForm 
                onCancel={() => setShowCostForm(false)}
                onSaveCostData={saveCostDataHandler}/>)
        } else {
            return null
        }
    }

    const CreateNewCost = <button onClick={() => setShowCostForm(true)}>Добавить новый расход</button>

    return(
        <div className="new-cost">
            {CreateNewCost}
            {getFormContent()}
        </div>
    )
}

export default NewCost;