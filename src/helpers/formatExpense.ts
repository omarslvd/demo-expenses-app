import Dinero from 'dinero.js';

const formatExpense = (amount: number) =>
    Dinero({ amount }).setLocale("en-US").toFormat();

export default formatExpense;