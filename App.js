import React from 'react';
// Import data and WeatherCard here
import data from './data';
import WeatherCard from './components/WeatherCard';

function App() {
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {/* Render components here */}
                {data.map((day, index) => {
                    return <WeatherCard key={index} day={day} />
                })}

            </div>
            
        </>
    )
}

export default App;