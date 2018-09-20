import data from "../data.json"

export const FETCH_DATA = "FETCH_DATA";

export function fetchData(){
    const request = JSON.stringify(data);

    console.log('Request', data);

    return {
        type: FETCH_DATA,
        payload: request
    }
}