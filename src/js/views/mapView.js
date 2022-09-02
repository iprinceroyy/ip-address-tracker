class MapView {
  _parentEl = document.querySelector('#map');
  _map;

  renderMap(coords, markerIcon) {
    this._map && this._map.remove() && this._map.off();

    this._map = L.map('map', { attributionControl: false }).setView(coords, 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
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
