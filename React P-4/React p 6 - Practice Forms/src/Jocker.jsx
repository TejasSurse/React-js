import { useState, useEffect } from "react";

export default function Joker(){
    let [joke, setJoke] = useState({});

    const url = "https://official-joke-api.appspot.com/random_joke";

    const getJock = async () => {
       let response =  await fetch(url);
       let jsonResponse = await response.json();
       console.log(jsonResponse);
       setJoke({setup : jsonResponse.setup, punchline : jsonResponse.punchline })
    }
  // writing in arrow funciotn and also call is react recommended format 
    useEffect( () => {
        async function getFirstJoke() {
        let response =  await fetch(url);
       let jsonResponse = await response.json();
       console.log(jsonResponse);
       setJoke({setup : jsonResponse.setup, punchline : jsonResponse.punchline })
    }
    getFirstJoke();
}, []);

    return(
        <div>
        <h4>Jock of the Day </h4>
        <h2>{joke.setup}</h2>
        <h2>{joke.punchline}</h2>
        <button onClick={getJock}>New Joke</button>
        </div>
    );
}