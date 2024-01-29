import {FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { BiSolidBaguette } from "react-icons/bi";
import { GiNoodles } from "react-icons/gi";
import { GiTacos } from "react-icons/gi";
import { Link } from "react-router-dom";
import './DifferentCuisines.css'
export default function DifferentCuisines(){

           return(

            <div className="icons">
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
            </div>        

           );

}