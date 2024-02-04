
import { useEffect, useState } from "react";
import GridGallery from "../GridGallery/GridGallery";
import * as recipesAPI from '../../utilities/recipes-api';

export default function FavData(){
    const[favData, setFavData]= useState([])

   useEffect(() => {

     getFavData();

   },[]);
   async function  getFavData(){
    const {recipes} = await recipesAPI.getData(); 
    setFavData(recipes);

   }
   return( 
   <>
     <h3>Trending</h3> 
     <GridGallery items={favData}  /> 
   </>
   );
   
}
