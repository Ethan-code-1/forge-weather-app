import React, {useEffect, useState} from 'react'
import {Button, TextField } from '@mui/material';



const weatherByHourTile = ({temp, icon, time, timezone}) => {

    const timeMilliseconds = time * 1000 + (1000 * timezone);
    const date = new Date(timeMilliseconds);

    const UTCDate = date.toUTCString();
    const UTCHours = date.getUTCHours(); 


    return (
        <>
            <p>{UTCHours}</p>
        </>
    )

};

export default weatherByHourTile;