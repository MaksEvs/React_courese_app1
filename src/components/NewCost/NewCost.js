import CostForm from './CostForm'
import CreateNewCost from './CreateNewCost'
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
            <CreateNewCost/>
            <CostForm 
                onSaveCostData={saveCostDataHandler}/>
        </div>
    )
}

export default NewCost;