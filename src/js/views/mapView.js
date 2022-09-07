import markerIcon from '../../images/icon-location.svg';

class MapView {
  _parentEl = document.querySelector('#map');
  _map;

  /**
   * Render the map to the DOM
   * @param {Array<latitue, longitude>} coords
   * @param {string} map_url - Leaflet map url
   * @param {string} attribution - Leaflet map attribution url
   * @returns {Object} A map object is return
   * @this {Object} an instance of MapView
   * @public
   * @author Prince Roy
   */
  renderMap(coords, map_url, attribution) {
    this._loadMap(coords);

    L.tileLayer(`${map_url}`, {
      attribution: `&copy; <a href="${attribution}">OpenStreetMap</a> contributors`,
      maxZoom: 20,
      maxNativeZoom: 18,
    }).addTo(this._map);

    const myIcon = L.icon({
      iconUrl: markerIcon,
      iconSize: [49, 57],
      popupAnchor: [-3, -76],
    });

    L.marker(coords, { icon: myIcon }).addTo(this._map);
  }

  /**
   * Set co-ordinates of the map
   * @param {Array<latitude,longitude>} coords
   * @returns {}
   * @protected
   */
  _loadMap(coords) {
    this._map && this._map.remove() && this._map.off();

    this._map = L.map('map', {
      scrollWheelZoom: false,
      smoothWheelZoom: true,
      attributionControl: false,
      zoomControl: false,
    }).setView(coords, 13);
  }

  /**
   * Clear the map container before rendering
   * @this {Object} An instance of MapView
   * @public
   */
  clearMap() {
    this._parentEl.innerHTML = '';
  }
}

export default new MapView();
