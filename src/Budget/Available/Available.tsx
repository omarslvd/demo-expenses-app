import React from 'react';

interface AvailableProps {
    month: string;
}

const Available: React.FC<AvailableProps> = ({ month }) => {
    return <h1>Available budget in {month}:</h1>
};

export default Available;