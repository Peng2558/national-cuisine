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
       <div>
       {detail.title}
       </div>);

}