import { useState } from 'react';
import SearchBox from './searchBox.jsx'
import WeatherInfo from './infoBox.jsx'

function WeatherApp() {
    
    const [info_weather, setWeatherInfo] = useState({
        city: "",
        humidity: 0,
        maxTemperature: 0,
        minTemperature: 0,
        temperature: 0,
        weather: "",
    })

    let updateWeather = (result) => {
        setWeatherInfo(result);
    }

    return (
        <div>
            <SearchBox updateInfo={updateWeather} />
            <WeatherInfo info={info_weather} />
        </div>
    );

}

export default WeatherApp;
