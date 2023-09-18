import CostForm from './CostForm'
import './NewCost.css'

const NewCost = (props) => {
    const saveCostDataHandler = (inputCostDate) => {
        const costDate = {
            ...inputCostDate,
            id: Math.random().toString()
        }
        
        props.onAddCost(costDate);
    }

    return(
        <div className="new-cost">
            <CostForm 
                onSaveCostData={saveCostDataHandler}/>
        </div>
    )
}

export default NewCost;