$(document).ready(function () {
  console.log("Document is ready!");

  const getWeather = (city) => {
    $("#cityName").text(city); // Assuming you have an element with id 'cityName' to display the city name
    const settings = {
      async: true,
      crossDomain: true,
      url:
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
      method: "GET",
      headers: {
        "x-rapidapi-key": "d94d4faf12msh0c4124657977b5ap1a96eejsnc6b6b56ae769",
        "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };

    $.ajax(settings)
      .done(function (response) {
        console.log(response);
        $("#temp").text(response.temp);
        $("#min_temp").text(response.min_temp);
        $("#max_temp").text(response.max_temp);
        $("#feels_like").text(response.feels_like);
        $("#humidity").text(response.humidity);
        $("#cloud_pct").text(response.cloud_pct);
        $("#wind_speed").text(response.wind_speed);
        $("#wind_degrees").text(response.wind_degrees);
        $("#sunrise").text(response.sunrise);
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        console.error("Error fetching weather data: ", textStatus, errorThrown);
      });
  };

  // Function call to fetch weather for a default city (Delhi)
  getWeather("Delhi");

  // Event listener for submit button
  $("#submit").click(function (e) {
    e.preventDefault(); // Prevent default form submission behavior
    const cityValue = $("#city").val(); // Assuming you have an input field with id 'city' for city name
    getWeather(cityValue); // Fetch weather for the entered city
  });
});

$(document).ready(function () {
  console.log("Document is ready!");

  const getWeather = (city) => {
    const settings = {
      async: true,
      crossDomain: true,
      url:
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
      method: "GET",
      headers: {
        "x-rapidapi-key": "d94d4faf12msh0c4124657977b5ap1a96eejsnc6b6b56ae769",
        "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };

    return $.ajax(settings);
  };

  const populateWeatherData = (city, data) => {
    $(`#${city}_temp`).text(data.temp);
    $(`#${city}_min_temp`).text(data.min_temp);
    $(`#${city}_max_temp`).text(data.max_temp);
    $(`#${city}_feels_like`).text(data.feels_like);
    $(`#${city}_humidity`).text(data.humidity);
    $(`#${city}_cloud_pct`).text(data.cloud_pct);
    $(`#${city}_wind_speed`).text(data.wind_speed);
    $(`#${city}_wind_degrees`).text(data.wind_degrees);
    $(`#${city}_sunrise`).text(data.sunrise);
  };

  const cities = [
    "Delhi",
    "Lucknow",
    "Hardoi",
    "Gorakhpur",
    "Ghaziabad",
    "Sitapur",
  ];

  cities.forEach((city) => {
    getWeather(city)
      .done(function (response) {
        console.log(`${city} weather data:`, response);
        populateWeatherData(city.toLowerCase(), response); // Lowercase the city name for consistency
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        console.error(
          `Error fetching ${city} weather data: `,
          textStatus,
          errorThrown
        );
      });
  });
});

$(document).ready(function () {
  console.log("Document is ready!");

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    $("body").toggleClass("dark-mode");
  };

  // Event listener for dark mode toggle button
  $("#darkModeToggle").click(function () {
    toggleDarkMode();
    const buttonText = $(this).text();
    $(this).text(buttonText === "Dark Mode" ? "Light Mode" : "Dark Mode");
  });

  // Your existing weather fetching and population code here
});
