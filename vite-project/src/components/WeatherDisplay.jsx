import React, {useEffect, useState} from 'react'
import {Button, TextField } from '@mui/material';


const WeatherDisplay = ({city, lat, lon}) => {

    //Setting up API and weatherData state the stores API feedback
    const [weatherData, setWeatherData] = useState(null);
    const API_KEY = import.meta.env.VITE_Open_Weather_API;


    useEffect(() => {
        const fetchQuestions = async() => {
            
            
            //const response = await fetch()
        }
    })

    return (
        <>

        </>
    )

};

export default WeatherDisplay;