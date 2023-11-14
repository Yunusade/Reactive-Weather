import React from 'react'
import WeatherCard from './WeatherCard'

const Location = (props) => {
  const found = props.data.find((day) => day.city === props.location)
  console.log(found)
  return (
    <div>
      <h1>{props.location}</h1>
      <WeatherCard day={found} />
    </div>
  )
}

export default Location