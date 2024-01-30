import {FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { BiSolidBaguette } from "react-icons/bi";
import { GiNoodles } from "react-icons/gi";
import { GiTacos } from "react-icons/gi";
import { GiOlive } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import './DifferentCuisines.css'
export default function DifferentCuisines(){

           return(

            <div className="icons">
                 <Link to={"/"}>
                <div>
                 <FaHome/>
                 <h4>Home</h4>            
                </div>
             </Link> 
             <Link to={"/cuisine/American"}>
                <div>
                 <FaHamburger/>
                 <h4>American</h4>            
                </div>
             </Link> 
             <Link to={"/cuisine/French"}>  
                <div>
                 <BiSolidBaguette/>
               <h4>French</h4>
                </div>
            </Link> 
            <Link to={"/cuisine/Italian"}>  
                <div>
                 <FaPizzaSlice/>
               <h4>Italian</h4>
                </div>
            </Link> 
            <Link to={"/cuisine/Chinese"}>  
                <div>
                 <GiNoodles/>
               <h4>Chinese</h4>
                </div>
            </Link> 
            <Link to={"/cuisine/Mexican"}>  
                <div>
                 <GiTacos/>
               <h4>Mexican</h4>
                </div>
            </Link> 
            <Link to={"/cuisine/Greek"}>  
                <div>
                 <GiOlive/>
               <h4>Greek</h4>
                </div>
            </Link> 
            </div>        

           );

}