import markerIcon from '../images/icon-location.svg';
import { getJSON } from './helpers';
import * as model from './model';
import locationView from './views/locationView';
import searchView from './views/searchView';
import mapView from './views/mapView';

const controlAddress = async () => {
  try {
    // 1) Get IP
    const ip = searchView.getQuery();
    if (!ip) return;

    // 2) Load address
    await model.loadAddress(ip);

    // 3) Render address
    locationView.render(model.state.info);

    // 4) Load map & Render
    const coords = [model.state.info.lat, model.state.info.lng];
    mapView.renderMap(coords, markerIcon);
  } catch (err) {
    console.log(`${err} 🤦‍♂️`);
  }
};

// const getLatLng = async ip => {
//   console.log(data);

//   const markup = `
//     <address class="data">
//                 <p>ip address</p>
//                 <p>${data.ip}</p>
//             </address>

//             <address class="data">
//                 <p>location</p>
//                 <p>${data.location.city}, ${data.location.country} ${data.location.postalCode}</p>
//             </address>

//             <time class="data">
//                 <p>timezone</p>
//                 <p>utc ${data.location.timezone}</p>
//             </time>

//             <address class="data">
//                 <p>isp</p>
//                 <p>${data.isp}</p>
//             </address>`;

//   infoContainer.insertAdjacentHTML('beforeend', markup);
//   return data.location;
// };
// let map;
// const displayMap = async ip => {
//   mapContainer.innerHTML = '';
//   mapContainer.setAttribute('class', '');

//   const { lat, lng } = await getLatLng(ip);
//   const coords = [lat, lng];
//   console.log(coords);

//   if (map) {
//     map.remove();
//     map.off();
//   }

//   map = L.map('map').setView(coords, 16);

//   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution:
//       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//   }).addTo(map);

//   const myIcon = L.icon({
//     iconUrl: markerIcon,
//     iconSize: [50, 60],
//     iconAnchor: [30, 60],
//     popupAnchor: [-3, -76],
//   });

//   L.marker(coords, { icon: myIcon }).addTo(map);
// };
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   //displayMap(ip);
//   e.target.firstElementChild.value = '';
// });

const init = () => {
  searchView.addHandlerSearch(controlAddress);
};
init();
