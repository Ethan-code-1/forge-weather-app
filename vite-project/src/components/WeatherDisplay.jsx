import React, {useEffect, useState} from 'react'
import {Button, TextField } from '@mui/material';
import CurrentWeather from './currentWeather'; 
import WeatherByHourTile from './WeatherByHourTile'
import '../cssFiles/WeatherDisplay.css'

const WeatherDisplay = ({city, lat, lon}) => {

    //Setting up API and weatherData state the stores API feedback
    const [weatherData, setWeatherData] = useState(null);
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [timezone, setTimezone] = useState(null);



    const API_KEY = import.meta.env.VITE_Open_Weather_API2;

    //For fetching current weather data
    useEffect(() => {
        const fetchWeatherData = async() => {
            
            const url = new URL("https://api.openweathermap.org/data/2.5/weather?");

            url.searchParams.append("lat", lat);
            url.searchParams.append("lon", lon)
            url.searchParams.append("units", "imperial")
            url.searchParams.append("appid", API_KEY)
            
            try{
                const response = await fetch(url);
                const data = await response.json();

                if(data){
                    setWeatherData(data)
                }
            } catch (error){
                console.log("There was an error fetching the data from the endpoint");
            }
        }

        fetchWeatherData(); 
    }, [lat, lon])


    //For fetching weather data for next 24 hours 
    useEffect(() => {
        const fetchHourlyForecast = async () => {
            const hourlyForecastUrl = new URL('https://pro.openweathermap.org/data/2.5/forecast/hourly?');
            hourlyForecastUrl.searchParams.append('lat', lat);
            hourlyForecastUrl.searchParams.append('lon', lon);
            hourlyForecastUrl.searchParams.append("units", "imperial")
            hourlyForecastUrl.searchParams.append('appid', API_KEY);
            hourlyForecastUrl.searchParams.append('cnt', '24');

            try{
                const response = await fetch(hourlyForecastUrl);

                const data = await response.json();

                if(data){
                    setTimezone(data.city.timezone);
                    setHourlyForecast(data.list);
                }
            }catch (error){
                console.log("There was an error getting hourly forcast data");
            }
        }

        fetchHourlyForecast(); 
    }, [lat, lon])

    return (
        <div className = "weatherDisplayMain">
            <div className="currentWeatherInfo">
                {weatherData && (
                    <>
                        <CurrentWeather weatherData={weatherData}  />
                    </>
                )}
            </div>
            <div className = 'hourly-forecast'>
                {hourlyForecast.map((hour, index) => (
                    <WeatherByHourTile key = {index} temp = {hour.main.temp} icon = {hour.weather.icon} time = {hour.dt} timezone = {timezone}/>
                ))}
            </div>

        </div>
    )

};


export default WeatherDisplay;