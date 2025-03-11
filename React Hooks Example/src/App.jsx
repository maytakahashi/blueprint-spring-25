import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [lat, setLat] = useState(40.495949)
  const [long, setLong] = useState(-74.444122)
  const [shouldMakeAPICall, setShouldMakeAPICall] = useState(false)
  const [weatherResult, setWeatherResult] = useState(null)

  useEffect(() => {
    console.log("working!!!")
    let result_display = document.getElementById("result_display")
    let latRaw = document.getElementById("lat").value
    let lat = parseFloat(latRaw)
    if (isNaN(lat)) {
        result_display.textContent = "Latitude must be a number between -90 and 90"
        return
    }
    let long = parseFloat(document.getElementById("long").value)
    if (isNaN(long)) {
        result_display.textContent = "Longitude must be a number between -90 and 90"
        return
    }
    let url = "https://api.open-meteo.com/v1/forecast?temperature_unit=fahrenheit&latitude=" + lat + "&longitude=" + long + "&current=temperature_2m"
  
    fetch(url)
        .then(response => {
            if (!response.ok) 
                throw new Error("Network response was not okay")
            setShouldMakeAPICall(false)
            return response.json()
        })
        .then(data => {
            setWeatherResult(data.current.temperature_2m)
        })
        .catch(error => {
            console.error("Error: ", error)
        })
  }, )

  return (
    <>
      <label htmlFor="lat">Latitude:</label>
      <input type="text" id="lat" value={lat} onChange={(e) => {setLat(e.target.value)}}/>
      <label htmlFor="long">Longitude:</label>
      <input type="text" id="long" value={long} onChange={(e) => {setLong(e.target.value)}}/>
      <button onClick={() => {setShouldMakeAPICall()}}>Click here to see the weather!!!</button>
      <p id="result_display">{weatherResult}</p>
    </>
  )
}

export default App
