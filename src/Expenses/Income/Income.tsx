import React from 'react';
import IncomeItem from './IncomeItem/IncomeItem';

interface IncomeProps {
    expenses: any;
    deleteExpense: any;
}

const Income: React.FC<IncomeProps> = ({ expenses, deleteExpense }) => {
    const incomes = expenses.filter(({ expense }: any) => expense.type === "+");

    return (
        <div>
            <h1>Income</h1>
            <div>
                {incomes.map(({ expense }: any, index: number) => (
                    <IncomeItem index={index}
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

export default Income;