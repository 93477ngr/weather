Build A Weather App in HTML CSS & JavaScript
A weather app contains a user input field for the user, which takes the input of the city name. Once the user enters the city name and clicks on the button, then the API Request is been sent to the OpenWeatherMap and the response is been retrieved in the application which consists of weather, wind speed, description, etc.
Approach
Create the Weather App UI Structure using the HTML elements. Embed all the essential CDN links for Icons, Fonts, etc.
Once the structure is created, the styling properties for each element like padding, box-shadow, transition, attractive effects like hovering, etc are been applied.
In the main JavaScript file, the overall behavior of the application is been defined.
Firstly, we are specifying the API URL of OpenWeatherMap. Then we are specifying the unique API key. By defaul,t the Weather of the Pune location is been shown when the application is loaded.
Then by using the async function, we are returning the wwather of the city which is entered by the user. If the city is not valid, then an error message is been shown to the user.
Once the details are fetched, then these details are been represented in the weatherShowFn().

url:"https://93477ngr.github.io/weather/"
