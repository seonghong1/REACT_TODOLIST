import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import style from './TimeWeather.module.css'

const TimeWeather = () => {
    const time = new Date();
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const [weather, setWeather] = useState(null)
    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude
            let lon = position.coords.longitude
            getWeatherByCurrentLocation(lat, lon)
        });
    }
    const getWeatherByCurrentLocation = async (lat, lon) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=196daaaf32e593d6d34bef920e72034f&units=metric`
        let response = await fetch(url);
        let data = await response.json();
        setWeather(data)
    }
    useEffect(() => {
        getCurrentLocation()
    }, [])
    return (
        <div>
            <div className={style.weather}>
                {weather?.name}{weather?.main.temp}℃
            </div>
            <div className={style.time}>
                {hours}:{minutes}
            </div>
        </div>
    )
}

export default TimeWeather