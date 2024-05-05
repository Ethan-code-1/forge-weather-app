import React, {useEffect, useState} from 'react'
import {Button, TextField } from '@mui/material';


const WeatherDisplay = ({city, lat, lon}) => {

    //Setting up API and weatherData state the stores API feedback
    const [weatherData, setWeatherData] = useState(null);
    const API_KEY = import.meta.env.VITE_Open_Weather_API2;


    useEffect(() => {
        const fetchWeatherData = async() => {
            
            const url = new URL("https://api.openweathermap.org/data/2.5/weather?");

            url.searchParams.append("lat", lat);
            url.searchParams.append("lon", lon)
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

    return (
        <div>
            { weatherData && (
                <h2>Weather in {weatherData.name}</h2>
                

            )}


        </div>
    )

};

export default WeatherDisplay;