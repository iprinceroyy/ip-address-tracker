import { IP_API_URL } from './config';
import { getJSON } from './helpers';

export const state = {
  info: {},
};

export const loadAddress = async ip => {
  try {
    const data = await getJSON(`${IP_API_URL}${ip}`);
    console.log(data);

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
    console.log(state.info);
  } catch (err) {
    console.log('opps');
    throw err;
  }
};

export const loadMap = async () => {
  const { lat, lng } = state.info;
  return [lat, lng];
};
