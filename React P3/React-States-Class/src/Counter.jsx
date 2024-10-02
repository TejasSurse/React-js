export default function Counter(){
    let count = 0;
    function incCount(){
        count++;
        console.log(count);
    }
    return (
        <>
        <h1>Count = {count}</h1>
        <button onClick={incCount}>Increase Counter</button>
        </>
    );
}