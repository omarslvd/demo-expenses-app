import React from 'react';
import formatExpense from '../../../helpers/formatExpense';

interface ExpenseItemProps {
    index: number;
    type: string;
    value: number;
    description: string;
    deleteExpense: (index: number) => any
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({
    index,
    type,
    value,
    description,
    deleteExpense
}) => {
    return <div onClick={() => deleteExpense(index)}>
        <h1>{description}</h1>
        <h3>{formatExpense(value)}</h3>
    </div>
}

export default ExpenseItem;