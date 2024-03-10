// // mapboxMap.js
// const mapboxgl = require('mapbox-gl');
// const { parseGpxData } = require('/gpxParser'); // Import the parseGpxData function

// mapboxgl.accessToken = 'Ypk.eyJ1Ijoiam9uaW5ndmFycyIsImEiOiJjbHRma2RwcXUwb200MnBwYjk2ZG56Zmt0In0.OKWwYFPEAlvgx64DqRKmrA';
// const map = new mapboxgl.Map({
//     container: 'testMap',
//     style: 'mapbox://styles/mapbox/dark-v11',
//     center: [-18.5347, 65.0800],
//     zoom: 5
// // });

// // Use the parseGpxData function to get GPX data
// parseGpxData('seeds/campgrounds.gpx', (error, gpxResult) => {
//     if (error) {
//         console.error('Error parsing GPX:', error);
//     } else {
//         // Access the parsed GPX data (gpxResult) and use it in your map logic
//         console.log('Parsed GPX Data:', gpxResult);

//         // Add your Mapbox map logic here using the gpxResult data
//         // For example, add markers based on waypoint coordinates
//         gpxResult.waypoints.forEach((waypoint) => {
//             new mapboxgl.Marker()
//                 .setLngLat([waypoint.lon, waypoint.lat])
//                 .addTo(map);
//         });
//     }
// });
