import React, { useState, createContext } from 'react';
import ContextUse from './ContextUse';

export const UserContext = createContext(); // Correct export

const CreateContext = () => {
    const [user, setUser] = useState("Anil"); // Actual state for the context

    return (
        <div>
            {/* Provide the actual user value */}
            <UserContext.Provider value={user}>
                <h1>{`Hello, ${user}`}</h1>
                <ContextUse />
            </UserContext.Provider>
        </div>
    );
};

export default CreateContext;
