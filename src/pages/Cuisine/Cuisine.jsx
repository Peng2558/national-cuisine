import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";

export default function Cuisine(){
   const [cuisine,setCuisine]= useState([]);
   let params = useParams();
   const getCuisine = async(name)=> {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=9`);
      const recipes = await data.json();
      setCuisine(recipes.results);
   };
   useEffect(()=>{
    getCuisine(params.type)
   },[params.type])
   
  return (

    <>
    <h2>{params.type} Cuisine</h2>
    <div className="grid-container">
      {cuisine.map((item) => (
        <div className="card" key={item.id}>
          <Link to={`/recipe/${item.id}`}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  </>
);

}