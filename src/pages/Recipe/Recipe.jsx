import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import * as recipesAPI from '../../utilities/recipes-api';
import './Recipe.css';
export default function Recipe(){
   
    let params = useParams();
    const [detail,setDetail]= useState({});

    // const fetchDetails = async () =>{
    // const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    // const detailData = await data.json();
    // setDetail(detailData);
   
    // };
    async function fetchDetails(){
      const data = await recipesAPI.getRecipeDetails(params.name); 
      setDetail(data);
     
     };
   useEffect(()=>{
    fetchDetails();
   },[params.name]);
  
   async function handleaddToFavoritePage() {
  
    try {
        await recipesAPI.addToFavoritePage(detail);
       
    } catch (error) {
        console.error("Error adding recipe to favorites:", error);
       
    }
}
  return(
    <>
      <div>
        <h2>{detail.title}</h2>
        <img src={detail.image} alt={detail.title} />
        <h2>Instructions</h2>
        <h5 dangerouslySetInnerHTML={{__html:detail.instructions}}></h5>
      </div>
      <ul>
        <h2>Ingredients</h2>
         {detail.extendedIngredients && detail.extendedIngredients.map((ingredient, index) => (
        <li key={`${ingredient.id}-${index}`}>{ingredient.original}</li>
         ))}
      </ul>     
       <button onClick={handleaddToFavoritePage}>Add to Favorites</button>
    </>
      );

}
