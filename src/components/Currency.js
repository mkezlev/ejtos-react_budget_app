import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
//import "./StyleCurrency.css" ;

const Currency = () => {
  const {dispatch } = useContext(AppContext);

	const changeCurrency = (val)=>{
			dispatch({
				type: 'CHG_CURRENCY',
				payload: val,
			})
	}

    /*const styles={
        hover: { backgroundcolor: 'red', border:'1px solid red' }
    }*/
	
   return (
    <div className='alert alert-secondary'> Currency {
        <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
          <option value="£">Uk(£)</option>
          <option value="₹">India(₹)</option>
          <option value="€">Europe(€)</option>
          <option value="CAD">Canada(CAD)</option>
        </select>	
        }	
      </div>
	);
};

export default Currency;