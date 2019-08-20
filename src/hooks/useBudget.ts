import { useState } from 'react';
import { Expense } from '../types/index';

const useBudget = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);

    const addExpense = (expense: Expense) => {
        const newExpenses = [...expenses, expense];
        setExpenses(newExpenses);
    };

    const deleteExpense = (index: number) => {
        const newExpenses = [...expenses];
        newExpenses.splice(index, 1);
        setExpenses(newExpenses);
    };

    return { expenses, addExpense, deleteExpense };
};

export default useBudget;