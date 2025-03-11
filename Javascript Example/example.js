function fetchWeatherData() {
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
            return response.json()
        })
        .then(data => {
            result_display.textContent = data.current.temperature_2m
        })
        .catch(error => {
            console.error("Error: ", error)
        })
}