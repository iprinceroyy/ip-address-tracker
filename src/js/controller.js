import * as model from './model';
import mapView from './views/mapView';
import searchView from './views/searchView';
import locationView from './views/locationView';
import markerIcon from '../images/icon-location.svg';

const controlAddress = async () => {
  try {
    // 1) Get IP
    const ip = searchView.getQuery();

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

const init = () => {
  // 1) Handler form inputs
  searchView.addHandlerSearch(controlAddress);

  // 2) Default
  controlAddress();
};
init();
