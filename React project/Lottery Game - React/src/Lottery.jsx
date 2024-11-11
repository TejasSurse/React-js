// import use state 
import { useState } from 'react';

import { genTickit, sum } from './helper';
import Ticket from './Ticket';

export default function Lottery({n = 3, winCondition}) {
    // declare state
    let [tickit, setTickit] = useState(genTickit(n));
    let isWinning  = winCondition(tickit) ;
    
    let buyTicket = () => {
        setTickit(genTickit(n));

    }
    return (
      <div>
        <h1>Lottery Game!</h1>
        <div className="tickit">
            <Ticket ticket={tickit}/>
        </div>
        <br />
        <button onClick={buyTicket}>Buy New Tickit</button>
        <h3>{isWinning && "Congratulations, You Won !"}</h3>
      </div>
    );
  }  