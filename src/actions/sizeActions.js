import { baseUrl } from '../config';


export const LOAD_SIZES = "supreme/productData/LOAD_SIZES";


const loadSizes = list => ({ type: LOAD_SIZES, list });

export const fetchSizes = (id) => async (dispatch) => {

    const response = await fetch(`${baseUrl}/api/size`);

    if (response.ok) {
        const list = await response.json();
        dispatch(loadSizes(list));
    }
}