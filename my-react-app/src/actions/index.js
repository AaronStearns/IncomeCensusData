import axios from "axios";

const ROOT_URL = `http://localhost:4001`;

export const FETCH_DATA = "FETCH_DATA";

export function fetchData(){
    const request = axios.get(ROOT_URL);
    console.log('Request', request);

    return {
        type: FETCH_DATA,
        payload: request
    }
}