const apikey = "e915d2a0d4e5c6eafb820ad5863a9d81";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputfield = document.querySelector(".Search input");
const searchbtn = document.querySelector(".Search button");
const weatherimg = document.querySelector(".weather-img");
// var nday = new Date();
// document.querySelector(".time").innerHTML = nday;
// Create a new Date object representing the current date and time
const currentDate = new Date();
document.querySelector(".time").innerHTML = currentDate; // Output: "03:30:45 PM" (example)

const Predictweather = async (city) => {
  const response = await fetch(apiUrl + city + `&APPID=${apikey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humid").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatherimg.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherimg.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherimg.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherimg.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherimg.src = "images/mist.png";
  }
};

searchbtn.addEventListener("click", () => {
  Predictweather(inputfield.value);
});
