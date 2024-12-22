const apiKey = "fcadeac41c648789007a3bb37202165c"
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Zurich&units=metric&appid=${apiKey}`

async function fetchTemperature() {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    if (data.main && data.main.temp) {
      document.getElementById("temperature").textContent =
        data.main.temp.toFixed(1) + "°C"
    } else {
      document.getElementById("temperature").textContent = "-"
      document.querySelector("footer.footer").style.display = "none"
    }
  } catch (error) {
    console.error("Fehler beim Abrufen der Wetterdaten:", error)
    document.getElementById("temperature").textContent = "-"
    document.querySelector("footer.footer").style.display = "none"
  }
}

// get temperature on page load
fetchTemperature() // disable, when locally developing to not exceed API limit
