import React from 'react';

interface ValueProps {
    value: string;
}

const Value: React.FC<ValueProps> = ({ value }) => {
    return <h1>{value}</h1>
};

export default Value;