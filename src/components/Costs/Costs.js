import Card from '../UI/Card';
import CostList from './CostList';
import './Costs.css'
import CostsFilter from './CostsFilter';
import React, {useState} from 'react';
import CostsDiargam from './CostsDiargam';

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2021');

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };

    const filterCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear;
    })

    return (
        <div>
            <Card className='costs'>
                <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
                <CostsDiargam costs={filterCosts}/>
                <CostList 
                    costs={filterCosts}/>
            </Card>
        </div>
    );
}

export default Costs;