import React, {useEffect, useState} from 'react'
import {Button, TextField } from '@mui/material';
import '../cssFiles/GetInfo.css'


const GetInfo = ({city, setCity}) => {

    return (
        <>
            <h1>Weather App</h1>
            <p>Welcome, please enter a city:</p>
            <form className = 'cityForm'>
                <TextField type = "text"></TextField>
                <Button variant="contained">Go</Button>
            </form>
        </>
    )

};

export default GetInfo;