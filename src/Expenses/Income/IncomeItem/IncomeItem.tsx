import React from 'react';
import formatExpense from '../../../helpers/formatExpense';

interface IncomeItemProps {
    index: number;
    type: string;
    value: number;
    description: string;
    deleteExpense: (index: number) => any
}

const IncomeItem: React.FC<IncomeItemProps> = ({
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
};

export default IncomeItem;