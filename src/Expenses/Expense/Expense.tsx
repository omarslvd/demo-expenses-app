import React from 'react'
import ExpenseItem from './ExpenseItem/ExpenseItem';

interface ExpenseProps {
    expenses: any;
    deleteExpense: (index: number) => any;
}

const Expense: React.FC<ExpenseProps> = ({
    expenses, deleteExpense
}) => {
    const newExpenses = expenses.filter((expense: any) => expense.type === "-");

    return (
        <div>
            <h1>Expenses</h1>
            <div>
                {newExpenses.map((expense: any, index: number) => (
                    <ExpenseItem index={index}
                        key={index}
                        type={expense.type}
                        value={expense.value}
                        description={expense.description}
                        deleteExpense={deleteExpense} />
                ))}
            </div>
        </div>
    )
};

export default Expense;