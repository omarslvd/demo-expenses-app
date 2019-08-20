import React from 'react';
import AmountValue from './AmountValue/AmountValue';
import AmountType from './AmountType/AmountType';

interface AmountProps {
    amount: string;
    type: string;
    backgroundColor: string;
}

const Amount: React.FC<AmountProps> = ({ amount, type, backgroundColor }) => {
    return <div>
        <AmountType amountType={type} />
        <AmountValue amountValue={amount} />
    </div>
};

export default Amount;