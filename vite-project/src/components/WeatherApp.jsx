import { TextField } from '@mui/material';
import React, {useEffect, useState} from 'react'
import GetInfo from './GetInfo';
import AskCity from './GetInfo';

const WeatherApp = () => {

    //Initialize all states 
    const [city, setCity] = useState(''); 



    //Set up API 
    const API_KEY = import.meta.env.VITE_Open_Weather_API
    
    //Get data
    const fetchGeoPosition = async () => {
        const response = await fetch()
    }



    return (
        <>
            {city === '' ? (
                <GetInfo city = {city} setCity = {setCity}></GetInfo>
            ) : (
                <p>There is a city</p>
            )}
        </>
    );
};

export default WeatherApp;