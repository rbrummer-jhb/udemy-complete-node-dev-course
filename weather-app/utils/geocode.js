const request = require('request');

// Mapbox Location API request
const geocode = (address, callback) => {
    // encodeURIComponent() encodes special characters like '?'
    const url = `http://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibmpyYiIsImEiOiJja3BjZzFjbmMxZDUzMm5ubHFwaWc5eGF1In0.BtoGxJP4qHjv8MtprtjFuw&limit=1`;

    // this is destructuring 'const {body} = response'
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, {
                location: body.features[0].place_name,
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
            });
        }
    });
};

module.exports = geocode;