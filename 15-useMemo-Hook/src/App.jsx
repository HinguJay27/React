import React, { useState } from 'react';

const App = () => {

    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(5);

    const expensiveCalculation = (num) => {

        console.log("Calculation Running");

        let result = 0;

        for (let i = 0; i < 100000000; i++) {
            result += num;
        }

        return result;
    };

    const result = expensiveCalculation(number);

    return (
        <div>
            <h1>Count: {count}</h1>

            <h2>Result: {result}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increase Count
            </button>

            <button onClick={() => setNumber(number + 1)}>
                Change Number
            </button>
        </div>
    );
};

export default App;