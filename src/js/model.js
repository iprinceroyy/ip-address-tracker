import { IP_API_URL, MAP_URL, ATTRIBUTION } from './config';
import { getJSON } from './helpers';

export const state = {
  info: {},
};

export const loadAddress = async ip => {
  try {
    const data = await getJSON(`${IP_API_URL}${ip}`);

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

export const getMapUrls = () => {
  return {
    map_url: MAP_URL,
    attribution: ATTRIBUTION,
  };
};
