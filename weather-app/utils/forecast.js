const request = require('request');

// Weather Stack API request
const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=a372b20350e279caf846d64807aeed91&query=${latitude},${longitude}&units=m`;
    
    // this is destructuring 'const {body} = response'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location!', undefined);
        } else {
            const {name} = body.location;
            const {temperature, feelslike, weather_descriptions} = body.current;

            callback(undefined, {
                name,
                weather_descriptions,
                temperature,
                feelslike,
            });
        }
    });
};

module.exports = forecast;