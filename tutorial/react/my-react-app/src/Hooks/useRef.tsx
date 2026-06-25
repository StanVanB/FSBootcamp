
// useRef - works same way as useState, but it does not cause a re-render when the value changes.
import { useRef } from 'react';

function Counter() {
    const countRef = useRef(0);

    function calculateCount() {
        countRef.current += 1;
        console.log(`Count: ${countRef.current}`);
    }

    return (
        <div>
            <p>You clicked {countRef.current} times</p>
            <button onClick={calculateCount}>
                Click me
            </button>
        </div>
    );
}

export default Counter;
