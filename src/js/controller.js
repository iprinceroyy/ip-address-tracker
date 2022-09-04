import * as model from './model';
import mapView from './views/mapView';
import searchView from './views/searchView';
import locationView from './views/locationView';

const controlAddress = async () => {
  try {
    // 1) Load spinner while loading data
    locationView.renderSpinner();

    // 2) Get IP
    const ip = searchView.getQuery();

    // 3) Load address
    await model.loadAddress(ip);

    // 4) Render address
    locationView.render(model.state.info);

    // 5) Render map
    const { map_url, attribution } = model.getMapUrls();
    const coords = [model.state.info.lat, model.state.info.lng];
    mapView.renderMap(coords, map_url, attribution);
  } catch (err) {
    console.log(`${err} 🤦‍♂️`);
    locationView.renderError(err);
  }
};

const init = () => {
  // 1) Handler form inputs
  searchView.addHandlerSearch(controlAddress);

  // 2) Default
  controlAddress();
};
init();
