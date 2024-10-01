import { useState } from 'react';
import './App.css';
import Btn from './button'; // Correct import of Btn
import { HandelingNonClick } from './HoverEvent';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Btn /> 
            <HandelingNonClick />
        </>
    );
}

export default App;
