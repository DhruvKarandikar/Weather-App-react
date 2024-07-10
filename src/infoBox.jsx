import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css"


function WeatherInfo({info}){

    let hot_weather = "https://media.tenor.com/COm_yOJptfAAAAAM/have-a-beautiful-day-good-morning-have-a-beautiful-day.gif";
    let cold_weather = "https://i.pinimg.com/originals/89/26/64/892664d38ee75481cc1f47c51ce0a856.gif";
    let rainy_weather = "https://i.pinimg.com/originals/5a/e2/75/5ae2753aba1330af8a1923e1469e5039.gif";

    return (
        <div className="InfoBox">
            <h1> Weather Info</h1>
            <p>City: {info.city}</p>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={
                        info.humidity > 80 ?
                        rainy_weather : info.temperature > 23
                        ? hot_weather : cold_weather
                    }
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    </Typography>
                    <div>
                        <p>Temperature: {info.temperature}°C</p>
                        <p>Humidity: {info.humidity}%</p>
                        <p>Weather: {info.weather}</p>
                        <p>Max Temperature: {info.maxTemperature}°C</p>
                        <p>Min Temperature: {info.minTemperature}°C</p>
                        <p>Weather can be described as {info.weather}</p>
                    </div>
                </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default WeatherInfo;
