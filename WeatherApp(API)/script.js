function getTemp() {
  let city = document.getElementById("city").value;
  let result = document.getElementById("result");

  let url = `https://api.weatherapi.com/v1/current.json?key=38240e6684c248eea58105218260702&q=${city}&aqi=no`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `Temperature in ${data.location.name} is ${data.current.temp_c}°C`;
    })
    .catch(() => {
      result.innerHTML = "City not found!";
    });
}
