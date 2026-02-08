const API_KEY = "38240e6684c248eea58105218260702"
const input = document.getElementById("input")

//loc and country
const locationCity=document.getElementById("loc_inp")
const country=document.getElementById("country_name")
//temp
const temperature=document.getElementById("temp")
//weather
const weather=document.getElementById("weather_type")
//humidity
const humidity=document.getElementById("humidity")
//time
const time=document.getElementById("time")

const weather_card=document.getElementById("weather_card")



weather_card.style.display="none"
function searchCity() {
    const city = input.value;
    const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`
    fetch(URL)
    .then((response)=>response.json())
    .then((data)=>{
        const imgURL=`http:${data.current.condition.icon}`
        weather_card.style.backgroundImage=fetch(imgURL)
        weather_card.style.display="block"
        locationCity.innerHTML=data.location.name
        country.innerHTML=data.location.country
        temperature.innerHTML=`${data.current.temp_c} <sup>0</sup>c`
        weather.innerHTML=data.current.condition.text
        humidity.innerHTML=data.current.humidity
        time.innerHTML=data.location.localtime

    })
    .catch((error)=>{
        console.log(error)
    });
}
