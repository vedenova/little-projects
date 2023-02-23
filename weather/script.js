window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let locationIcon = document.querySelector(".weather-icon");
  const loader = document.querySelector(".loading");
  const degreeSection = document.querySelector(".degree-section");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=50907a0a6ac36992b86373ff0ed26b5a&units=metric`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const temperature = data.main.temp;
          const description = data.weather[0].description;
          const location = data.name;
          const icon = data.weather[0].icon;

          //Set DOM elements from the API
          temperatureDegree.textContent = Math.floor(temperature);
          temperatureDescription.textContent = description;
          locationTimezone.textContent = location;
          //Set icons
          locationIcon.innerHTML = `<img src="icons/${icon}.png">`;
          degreeSection.classList.remove("hidden");
          loader.classList.add("hidden");
        });
    });
  }
});
