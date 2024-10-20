import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0);

    console.log("component was re-rendered with count value: ", count);

    function incCount() {
        setCount(prevCount => prevCount + 1);  // Correctly update state
        console.log("Updated count: ", count + 1);  // Will log the correct incremented value
    }

    return (
        <>
            <h1>Count = {count}</h1>
            <button onClick={incCount}>Increase Counter</button>
        </>
    );
}
