import React, { useState } from 'react';

export default function SmartCounter() {
    const [count, setCount] = useState(0);

    function increment() {
        const next = count + 1;
        setCount(next);
    }

    return (
        <div style={{ padding: '16px', border: '1px solid #ccc' }}>
            <h3>Smart Counter</h3>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
