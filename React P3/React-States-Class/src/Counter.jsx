import { useState } from "react";
export default function Counter(){
    let [count, setCount] = useState(0);
    function incCount(){
        setCount(count++);
        console.log(count);
    }
    return (
        <>
        <h1>Count = {count}</h1>
        <button onClick={incCount}>Increase Counter</button>
        </>
    );
}