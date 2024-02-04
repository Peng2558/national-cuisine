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

export function getCuisineData(name){
  
    return sendRequest(`${BASE_URL}/cuisine?`+ new URLSearchParams({
        cuisine: `${name}`
      
    }));
    
}
export function getRecipeDetails(name) {
    return sendRequest(`${BASE_URL}/recipe?` + new URLSearchParams({ name }));
}