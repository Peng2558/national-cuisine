import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import GridGallery from "../GridGallery/GridGallery";


export default function FavData(){
    const[favData, setFavData]= useState([])

   useEffect(() => {

     getFavData();

   },[]);
   const getFavData = async () => {
    const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
    const data = await api.json();
    setFavData(data.recipes);
   };
   return( 
   <>
     <h3>Trending</h3> 
     <GridGallery items={favData}  /> 
   </>
   );
   
}
