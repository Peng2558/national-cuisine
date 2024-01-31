import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Recipe(){
   
    let params = useParams();
    const [detail,setDetail]= useState({});
    const fetchDetails = async () =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json();
    setDetail(detailData);
  
    }
   useEffect(()=>{
    fetchDetails();
   },[params.name])
  return(
    <>
      <div>
        <h2>{detail.title}</h2>
        <img src={detail.image} alt="detail.title" />
        <h4 dangerouslySetInnerHTML={{__html:detail.instructions}}></h4>
      </div>
      <ul>
        <h4>Ingredients</h4>
      {/* {detail.extendedIngredients ? detail.extendedIngredients.map((ingredient) => (
        <li key={ingredient.id}>{ingredient.original}</li>
                )) : null} */}
         {detail.extendedIngredients && detail.extendedIngredients.map((ingredient, index) => (
        <li key={`${ingredient.id}-${index}`}>{ingredient.original}</li>
         ))}
      </ul>     
  
    </>
      );

}