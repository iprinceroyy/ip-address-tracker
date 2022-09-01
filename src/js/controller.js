import markerIcon from '../images/icon-location.svg';
import { getJSON } from './helpers';

const form = document.querySelector('.tracker__form');
const infoContainer = document.querySelector('.tracker__info');
const mapContainer = document.querySelector('#map');

const getLatLng = async ip => {
  infoContainer.innerHTML = '';
  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_k705Ppzs1oviTSMrmFKH6DI1OA2kP&ipAddress=${ip}`
  );

  if (!res.ok) return;

  const data = await res.json();
  console.log(data);

  const markup = `
    <address class="data">
                <p>ip address</p>
                <p>${data.ip}</p>
            </address>

            <address class="data">
                <p>location</p>
                <p>${data.location.city}, ${data.location.country} ${data.location.postalCode}</p>
            </address>

            <time class="data">
                <p>timezone</p>
                <p>utc ${data.location.timezone}</p>
            </time>

            <address class="data">
                <p>isp</p>
                <p>${data.isp}</p>
            </address>`;

  infoContainer.insertAdjacentHTML('beforeend', markup);
  return data.location;
};
let map;
const displayMap = async ip => {
  mapContainer.innerHTML = '';
  mapContainer.setAttribute('class', '');

  const { lat, lng } = await getLatLng(ip);
  const coords = [lat, lng];
  console.log(coords);

  if (map) {
    map.remove();
    map.off();
  }

  map = L.map('map').setView(coords, 16);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const myIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [50, 60],
    iconAnchor: [30, 60],
    popupAnchor: [-3, -76],
  });

  L.marker(coords, { icon: myIcon }).addTo(map);
};
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const ip = e.target.firstElementChild.value;
  displayMap(ip);
  e.target.firstElementChild.value = '';
});
