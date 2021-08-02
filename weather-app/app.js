const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

// this is destructuring 'const { latitude, longitude, location } = data'
// if the third function parameter is destructured and there isn't a return value
// because of an error the default value is an empty object {}
geocode(location, (error, { latitude, longitude, location } = {}) => {
    if (!location) {
        return console.log('No location specified.');
    }

    if (error) {
        return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }

        console.log(location);
        console.log(forecastData);
    });
});
