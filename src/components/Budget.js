import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Currency from './Currency';

const Budget = () => {
	const { budget,dispatch,expenses } = useContext(AppContext);

	const changeBudget = (val)=>{
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

		
		if(val<totalExpenses) {
			alert("You cannot reduce the budget that is already allocated!");
		}         
        else {
            if (val>20000){
                alert("Total Budget cannot be more than 20K");
                val=20000;
            }
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
			}
	}
	
	return (
		<div className='alert alert-secondary'>
            <span>{Currency}
            <input type="number" step="10" value={budget} onInput={(event)=>changeBudget(event.target.value)}></input>
            </span>
			
		</div>
	);
};

export default Budget;
