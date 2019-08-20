import React from 'react';
import Value from './Value/Value';
import Available from './Available/Available';
import Amount from './Amount/Amount';
import { Expense } from '../types/index';
import { totalValue, totalAmount } from '../helpers/totals';

interface BudgetProps {
    expenses: Expense[];
}

const Budget: React.FC<BudgetProps> = ({ expenses }) => {
    return <div>
        <header>
            <Available month="June 2019" />
            <Value value={totalAmount(expenses)} />
        </header>
        <Amount type={"Income"} amount={totalValue(expenses, "+")} backgroundColor="#0EAD69" />
        <Amount type={"Expenses"} amount={totalValue(expenses, "-")} backgroundColor="#DD1C1A" />
    </div>
};

export default Budget;