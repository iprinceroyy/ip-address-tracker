import markerIcon from '../images/icon-location.svg';
if (module.hot) {
    module.hot.accept();
}

const form = document.querySelector('.tracker__form');

const getLatLng = async ip => {
    const res = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_k705Ppzs1oviTSMrmFKH6DI1OA2kP&ipAddress=${ip}`
    );

    if (!res.ok) return;

    const data = await res.json();
    console.log(data);
    return data.location;
};
const displayMap = async ip => {
    const { lat, lng } = await getLatLng(ip);
    const coords = [lat, lng];
    console.log(coords);

    const map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const myIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [50, 60],
        iconAnchor: [30, 60],
        popupAnchor: [-3, -76],
    });

    L.marker(coords, { icon: myIcon }).addTo(map);

    L.marker.on('click', function(e) {
        map.setView(e.latlng, 13);
    });
};
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const ip = e.target.firstElementChild.value;
    displayMap('192.212.174.101');
});