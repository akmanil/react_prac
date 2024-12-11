import React, { useContext } from 'react';
import { UserContext } from './CreateContext'; // Correct import

const ContextUse = () => {
    const user = useContext(UserContext); // Consume the context value

    return (
        <div>
            <h3>useContext used in a nested root</h3>
            <p>{`User Again: ${user}`}</p>
        </div>
    );
};

export default ContextUse;
