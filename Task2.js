const systemPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("System Ready");
    }, 2000);
});

systemPromise.then((result) => {
    console.log(result);
});


// Fetch using .then() and .catch()
const url =
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,wind_speed_10m";

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.current_weather);
    })
    .catch((error) => {
        console.error("Error:", error);
    });



// Create function - Try to get weather- Wait for API response-Convert JSON to JavaScript object-Print current weather-Done-if something goes wrong-Print the error
// Async/Await with Try/Catch
    async function getWeather() {
    try {
        const url =
            "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,wind_speed_10m";

        const response = await fetch(url);

        const data = await response.json();

        console.log(data.current_weather);
    } catch (error) {
        console.error("Network Error:", error);
    }
}

getWeather();


// using .map()
// Use .map() to build a cleaner array of weather objects.

async function mapWeatherData() {
    try {
        const url =
            "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m";

        const response = await fetch(url);
        //  Convert the response to JSON
        const data = await response.json();    

        const weatherArray = data.hourly.time.map((time, index) => {
            return {
                time: time,
                temperature: data.hourly.temperature_2m[index]
            };
        });

        console.log(weatherArray);
    } catch (error) {
        console.error(error);
    }
}

mapWeatherData();



// using .filter()method 
// Use .filter() to keep only the weather objects that match a condition (like temperature above 20°C).
// .filter() checks every item and returns all matching items in a new array.
async function filterHotHours() {
    try {
        const url =
            "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m";

        const response = await fetch(url);
        const data = await response.json();

        const weatherArray = data.hourly.time.map((time, index) => ({
            time,
            temperature: data.hourly.temperature_2m[index]
        }));

        const hotHours = weatherArray.filter((item) => item.temperature > 20);

        console.log(hotHours);
    } catch (error) {
        console.error(error);
    }
}

filterHotHours();



// Use find()
// .find() returns only the first matching item and then stops.
async function findColdHour() {
    try {
        const url =
            "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m";

        const response = await fetch(url);
        const data = await response.json();

        const weatherArray = data.hourly.time.map((time, index) => ({
            time,
            temperature: data.hourly.temperature_2m[index]
        }));

        const coldHour = weatherArray.find(
            (item) => item.temperature < 10
        );

        console.log(coldHour);
    } catch (error) {
        console.error(error);
    }
}

findColdHour();


// // nested prmoise (.then()) we can also done by this but here we may see like call back hell if there are more cities 
// function londonParisWeather() {

//     const london =
//         "https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=-0.11&current_weather=true";

//     const paris =
//         "https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current_weather=true";

//     fetch(london)
//         .then((response) => response.json())
//         .then((londonData) => {

//             fetch(paris)
//                 .then((response) => response.json())
//                 .then((parisData) => {

//                     const temperatures = {
//                         London: londonData.current_weather.temperature,
//                         Paris: parisData.current_weather.temperature
//                     };

//                     console.log(temperatures);
//                 });

//         })
//         .catch((error) => {
//             console.error(error);
//         });
// }

// londonParisWeather();



// Nested Promise (.then())

const london =
    "https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=-0.11&current_weather=true";

const paris =
    "https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current_weather=true";

function londonParisWeather() {
    return fetch(london)
        .then((response) => response.json())
        .then((londonData) => {
            return fetch(paris)
                .then((response) => response.json())
                .then((parisData) => {
                    return {
                        London: londonData.current_weather.temperature,
                        Paris: parisData.current_weather.temperature
                    };
                });
        });
}

londonParisWeather()
    .then((temperatures) => {
        console.log(temperatures);
    })
    .catch((error) => {
        console.error(error);
    });




// async await version 
// await  Wait before moving to the next line
async function sequentialWeather() {
    try {

        const london =
            "https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=-0.11&current_weather=true";

        const paris =
            "https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current_weather=true";

        const londonResponse = await fetch(london);
        const londonData = await londonResponse.json();

        const parisResponse = await fetch(paris);
        const parisData = await parisResponse.json();

        console.log({
            London: londonData.current_weather.temperature,
            Paris: parisData.current_weather.temperature
        });

    } catch (error) {
        console.error(error);
    }
}

sequentialWeather();



// promise.all()
// Promise.all() Run all promises at the same time and wait until every one is finished
async function parallelWeather() {

    try {

        const urls = [

            "https://api.open-meteo.com/v1/forecast?latitude=35.68&longitude=139.69&current_weather=true",

            "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.00&current_weather=true",

            "https://api.open-meteo.com/v1/forecast?latitude=-33.86&longitude=151.21&current_weather=true"

        ];

        const responses = await Promise.all(
            urls.map((url) => fetch(url))
        );

        const data = await Promise.all(
            responses.map((response) => response.json())
        );

        console.log(data);

    } catch (error) {
        console.error(error);
    }
}

parallelWeather();


// ultimate weather pipeline
// This function fetches weather data for three cities at the same time, 
// converts the responses into simpler objects, finds the first city where the wind speed is greater than 15 km/h,
// and prints that city's weather information.


async function weatherPipeline() {

    try {

        const urls = [

            "https://api.open-meteo.com/v1/forecast?latitude=35.68&longitude=139.69&current_weather=true",

            "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.00&current_weather=true",

            "https://api.open-meteo.com/v1/forecast?latitude=-33.86&longitude=151.21&current_weather=true"

        ];

        const responses = await Promise.all(
            urls.map((url) => fetch(url))
        );

        const data = await Promise.all(
            responses.map((response) => response.json())
        );

        const formattedData = data.map((item, index) => ({
            id: index + 1,
            currentTemp: item.current_weather.temperature,
            windSpeed: item.current_weather.windspeed
        }));

        console.log(formattedData);

        const windyLocation = formattedData.find(
            (item) => item.windSpeed > 15
        );

        console.log("Wind Speed > 15 km/h:");

        console.log(windyLocation);

    } catch (error) {

        console.error("Error:", error);

    }
}

weatherPipeline();