import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import GridGallery from "../GridGallery/GridGallery";

export default function FavData(){
    const[favData, setFavData]= useState([])

   useEffect(() => {

     getFavData();

   },[]);
   const getFavData = async () => {
    const temp = localStorage.getItem("favData");
    if(temp){
        setFavData(JSON.parse(temp));
    }
    else{
        const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const data = await api.json();
        localStorage.setItem("favData",JSON.stringify(data.recipes));
        setFavData(data.recipes);
        console.log(data.recipes);
    } 
   };
   return <GridGallery items={favData} />;
   
}
