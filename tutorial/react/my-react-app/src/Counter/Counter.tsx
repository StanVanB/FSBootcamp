import { useReducer } from 'react';
 
function reducer(state: { count: number }, action: { type: string }) {
 
    const { type } = action;
 
    switch (type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            throw new Error('Unknown action type');
    }
 
}
 
function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
 
    return (
        <div>
            <p>You clicked {state.count} times</p>
            <button onClick={() => dispatch({ type: 'increment' })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>
        </div>
    );
}
 
export default Counter;


// import { useState, useEffect } from 'react';
//
// function Counter() {
//     const [count, setCount] = useState(0);
//
//     function calculateCount() {
//         setCount(count + 1);
//         // console.log('Count after incrementing:', count); // Log the updated count value
//     }
//
//     useEffect(() => {
//         console.log('useEffect count value has been updated:', count); // Log the count value whenever it changes
//     }, [count]);
//
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={calculateCount}>
//                 Click me
//             </button>
//         </div>
//     );
// }
//
// export default Counter;
//
//
// import { useRef } from 'react';
//
// function Counter() {
//     const countRef = useRef(0);
//
//     function calculateCount() {
//         countRef.current += 1;
//         console.log(`Count: ${countRef.current}`);
//     }
//
//     return (
//         <div>
//             <p>You clicked {countRef.current} times</p>
//             <button onClick={calculateCount}>
//                 Click me
//             </button>
//         </div>
//     );
// }
//
// export default Counter;
