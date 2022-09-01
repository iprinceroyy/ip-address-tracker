import { API_URL } from './config';
import { getJSON } from './helpers';

export const loadAddress = async ip => {
    try {
        const data = await getJSON(`${API_URL}${ip}`);
        console.log(data);
    } catch (err) {
        console.log(`${err} 🤦‍♂️`);
        throw err;
    }
};