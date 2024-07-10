import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchBox.css";
import { useState } from "react";


function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "8f4ab98414fd0fc11ab6d4bd8c8c246b"

    let getWeatherInfo = async() => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: jsonResponse.name,
            temperature: Math.round(jsonResponse.main.temp - 273.15),
            humidity: jsonResponse.main.humidity,
            maxTemperature: Math.round(jsonResponse.main.temp_max - 273.15),
            minTemperature: Math.round(jsonResponse.main.temp_min - 273.15),
            weather: jsonResponse.weather[0].description
        }
        return result;
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInformation = await getWeatherInfo();
        updateInfo(newInformation);
    };

    return (
        <div>
            <h3>Search For weather</h3>
            <form className="SearchBox" onSubmit={handleSubmit}>
                <TextField id="city" label="city Name" variant="outlined" onChange={handleChange} required/>
                <Button variant="contained" type="submit">search</Button>
            </form>
        </div>
    );

}


export default SearchBox;
