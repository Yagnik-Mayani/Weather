import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Weather({update}) {
    let[weather,setweather]=useState("");

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="627cbb720f41a928ec0f17eda65fe3ad";

    let getWeather = async () => {
        let response = await fetch(`${API_URL}?q=${weather}&appid=${API_KEY}&units=metric`);
        let jsonResponse= await response.json();
        let result ={
            city:weather,
            temp: jsonResponse.main.temp,
            humidity: jsonResponse.main.humidity,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            feelsLike: jsonResponse.main.feels_like,

        };
        console.log(result);
        return result;
    }

    let handler = (evt) => {
        setweather(evt.target.value)
    };

    let submit = async (evt) => {
        evt.preventDefault();
        console.log(weather);
        setweather("");
       let newinfo = await getWeather();
       update(newinfo);
    };
    return(
        <div>
            <h1 style={{color:"black"}}>Search Weather</h1>
            <form onSubmit={submit}>
            <TextField id="outlined-basic" label="City" variant="outlined" value={weather} onChange={handler} />
            <br></br>
            <br></br>
            <Button variant="contained" type="submit" style={{marginBottom:"25px"}}>Search</Button>
            </form>
        </div>
    );
}