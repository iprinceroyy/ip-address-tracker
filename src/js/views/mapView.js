import markerIcon from '../../images/icon-location.svg';

class MapView {
  _parentEl = document.querySelector('#map');
  _map;

  _loadMap(coords) {
    this._map && this._map.remove() && this._map.off();

    this._map = L.map('map', {
      scrollWheelZoom: false,
      smoothWheelZoom: true,
      attributionControl: false,
    }).setView(coords, 16);
  }

  renderMap(coords, map_url, attribution) {
    this._loadMap(coords);

    L.tileLayer(`${map_url}`, {
      attribution: `&copy; <a href="${attribution}">OpenStreetMap</a> contributors`,
      maxZoom: 20,
      maxNativeZoom: 18,
    }).addTo(this._map);

    const myIcon = L.icon({
      iconUrl: markerIcon,
      iconSize: [50, 60],
      iconAnchor: [30, 60],
      popupAnchor: [-3, -76],
    });

    L.marker(coords, { icon: myIcon }).addTo(this._map);
  }
}

export default new MapView();
