import React from 'react';

interface AmountValueProps {
    amountValue: string;
}

const AmountValue: React.FC<AmountValueProps> = ({ amountValue }) => {
    return <h1>{amountValue}</h1>
};

export default AmountValue;