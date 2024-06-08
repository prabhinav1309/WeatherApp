# Weather App

## Overview
The Weather App is a simple web application that allows users to view weather information for different cities. Users can select a city from the dropdown menu or use the search functionality to get the current weather details.

## How to Run the Application Locally
To run the application locally, follow these steps:

1. Clone the repository to your local machine using Git:
   ```
   git clone https://github.com/prabhinav1309/WeatherApp.git
   ```

2. Navigate to the project directory:
   ```
   cd WeatherApp
   ```

3. Open the `index.html` file in your preferred web browser.

## Approach and Technologies Used
The Weather App is built using HTML, CSS, and JavaScript. Here's a brief overview of the approach and technologies used:

- **HTML:** Provides the structure and content of the web page.
- **CSS:** Styles the elements of the web page to enhance its appearance and layout.
- **JavaScript:** Handles the dynamic functionality of the web application, such as fetching weather data from an API and updating the UI with the retrieved information.

The application uses the OpenWeatherMap API to fetch weather data for different cities. It dynamically populates the weather details for each city on the web page.

## Known Issues or Limitations
Currently, the Weather App has the following known issues or limitations:

- **Limited City Selection:** The dropdown menu only includes a few predefined cities. Users cannot select cities outside of this list directly from the UI. Those are not functional right now.
- **Single API Key:** The application uses a single API key for fetching weather data, which may have usage limitations or rate limits imposed by the API provider.
- **No Error Handling:** There is minimal error handling in the application. If there are issues with fetching weather data from the API, users may not receive feedback or error messages.

---
