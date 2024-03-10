mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'showMap', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 10, // starting zoom
});

const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
    `<h3>${campground.title}</h3><p>${campground.location}</p>`
);


new mapboxgl.Marker().setLngLat(campground.geometry.coordinates)
    .setPopup(popup)
    .addTo(map);