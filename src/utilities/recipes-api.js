import sendRequest from "./send-request";
 const BASE_URL = '/api/recipes'; 
 
 

export function addToFavoritePage(detail){

    return sendRequest(`${BASE_URL}/favorites`, 'POST', detail);
}

export function fetchFavorites(){

    return sendRequest(`${BASE_URL}/favorites`);
}
export function getData(){

    return sendRequest(`${BASE_URL}/`);
}

// export function getCuisineData(){

//     return sendRequest(`${BASE_URL}/`);
// }