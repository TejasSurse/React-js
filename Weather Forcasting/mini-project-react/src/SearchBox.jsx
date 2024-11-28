import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState, useEffect } from 'react';



//0af979fdc28f0ea1eb074f789a5a8735


//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


export default function SearchBox( {updateInfo }){
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY =  "0af979fdc28f0ea1eb074f789a5a8735";
   

    let getWeatherInfo = async ( ) =>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        //console.log(response);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            temMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    }

    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event) =>{
        event.preventDefault();
        console.log(city);
        setCity("");
       let info = await getWeatherInfo();
       updateInfo(info);
    }

    return (
        <div className='SearchBox'>
            <h3>Search Box</h3>
            <form action="" onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" onChange={handleChange} value={city} required/>
            <br /><br />
            <Button variant="contained" type='Submit' endIcon={<SendIcon />}>
            Search
            </Button>
            </form>
        </div>
    );
}