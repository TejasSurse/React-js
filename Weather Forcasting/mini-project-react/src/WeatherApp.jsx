import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";


export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo ] = useState({
        city: "Delhi",
        feelslike: 24.0,
        temp: 23.3,
        tempMin: 22.0,
        tempMax: 25.0,
        humidity: 60.0,
        weather: "Sunny",
    });

    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }
    return(
        <div style={{textAlign : "center"}}>
            <h1>Weatehr app</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    );
}