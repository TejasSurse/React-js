function PrintCount() {
    console.log("Hello");
}

let a = 1;
function printCount() {
    
    console.log(a);
    a = a + 1;
}

function Btn() { // Changed btn to Btn
    return (
        <>
            <button onClick={PrintCount}> Click Mala !!</button>
            <p onClick={printCount}>Paragraph</p>
        </>
    );
}

export default Btn; // Ensure the default export is correct
