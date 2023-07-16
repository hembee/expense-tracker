
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import React, {useState } from 'react';
const NewExpense=(props) =>{
    const [isEditing, setIsEditing]= useState(false)
    const saveExpenseDataHandler= (enteredExpenseData)=>{
        const ExpenseData={
            ...enteredExpenseData,
            id: Math.random
        }
        props.onAddExpense(ExpenseData)
    }
    const startEditing=()=>{
     setIsEditing(true)
    }
    const cancelEditing=()=>{
        setIsEditing(false)
    }
return(
    <div className='new-expense'>
        {!isEditing && <button onClick={startEditing} type='button'>Add New Expense</button>}
        {isEditing && <ExpenseForm onCancel={cancelEditing} onSaveExpenseData={saveExpenseDataHandler}/>}
    </div>
)
}
export default NewExpense