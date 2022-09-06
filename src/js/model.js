import { IP_API_URL, MAP_URL, ATTRIBUTION, API_KEY } from './config';
import { getJSON } from './helpers';

export const state = {
  info: {},
};

/**
 * Fetch the info of the specified ip address
 * @param {string} ip - An ip address
 * @returns {Promise.<string>}
 * @requires views/helpers.getJSON
 * @throws {Exception}
 */
export const loadAddress = async domain => {
  try {
    const data = await getJSON(
      `${IP_API_URL}?apiKey=${API_KEY}&domain=${domain}`
    );

    state.info = {
      ip: data.ip,
      isp: data.isp,
      lat: data.location.lat,
      lng: data.location.lng,
      city: data.location.city,
      country: data.location.country,
      timezone: data.location.timezone,
      postalCode: data.location.postalCode,
    };
  } catch (err) {
    throw err;
  }
};

/**
 *
 * @returns {Object} An object of leaflet map url
 */
export const getMapUrls = () => {
  return {
    map_url: MAP_URL,
    attribution: ATTRIBUTION,
  };
};
