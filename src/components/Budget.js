import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (newBudget > 20000) {
            alert("ERROR: Input value exceeding limit (20000) ");
            setNewBudget(20000);
        } else if (newBudget < totalExpenses) {
            alert(`ERROR: Input value below expenses ${totalExpenses}`);
            setNewBudget(totalExpenses + 1);
        } else {
            setNewBudget(event.target.value);
        } 
    }
    return (
        <div className='alert alert-primary'>
            <span>Budget: {currency}{newBudget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}>
            </input>
        </div>
    );
};
export default Budget;
