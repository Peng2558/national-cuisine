import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import GridGallery from "../../components/GridGallery/GridGallery";
import './Cuisine.css';
import queryString from "query-string";
import * as recipesAPI from '../../utilities/recipes-api';
export default function Cuisine(){
   const [cuisine,setCuisine]= useState([]);
   let params = useParams();
    async function getCuisine(name){
    const {recipes} = await recipesAPI.getCuisineData(name); 
    setCuisine(recipes);
   
   }
   useEffect(()=>{
    getCuisine(params.type)
   },[params.type])
   
  return (
    <>
     <>
      <h2>{params.type} Cuisine</h2>
      <GridGallery items={cuisine} />
    </>
  </>
);

}

