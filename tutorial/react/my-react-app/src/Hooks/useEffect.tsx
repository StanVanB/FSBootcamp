// useState and useEffect - works same way as useRef, but it causes a re-render when the value changes.
//useState - is a hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update it.

//useEffect - is a hook that allows you to perform a specified action after the component has been rendered.
//  It takes two arguments: a function to run after the render and an array that determine when the effect should run.
// If the array is empty, the effect will only run once after the initial render.
import {useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function calculateCount() {
        setCount(count + 1);
        // console.log('Count after incrementing:', count); // Log the updated count value
    }

    useEffect(() => {
        console.log('useEffect count value has been updated:', count); // Log the count value whenever it changes
    }, [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={calculateCount}>
                Click me
            </button>
        </div>
    );
}

export default Counter;