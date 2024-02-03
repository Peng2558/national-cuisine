import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import GridGallery from "../../components/GridGallery/GridGallery";
import './Cuisine.css';

export default function Cuisine(){
   const [cuisine,setCuisine]= useState([]);
   let params = useParams();
   const getCuisine = async(name)=> {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=9`);
      const recipes = await data.json();
      setCuisine(recipes.results);
   };
  // async function  getCuisine(name){
    
  //   const {recipes} = await recipesAPI.getCuisineData(); 
  //   setCuisine(recipes);

  //  }
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

