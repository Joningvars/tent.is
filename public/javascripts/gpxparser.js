// gpxParser.js
const fs = require('fs');
const gpxParse = require('gpx-parse');

// Parse GPX data and export the relevant information
function parseGpxData(filePath, callback) {
    const gpxData = fs.readFileSync(filePath, 'utf-8');
    gpxParse.parseGpx(gpxData, callback);
}

module.exports = { parseGpxData };
