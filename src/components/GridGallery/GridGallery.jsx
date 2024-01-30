import React from 'react';
import './GridGallery.css';
import { Link } from 'react-router-dom';
export default function GridGallery({ items}) {
  return (
    <div className="grid-wrapper">
     <h3>Favorite Dishes</h3>
    <div className="grid-container">
      {items.slice(0, 9).map((item) => (
        <div className="grid-item" key={item.id}>
            <Link to={'/recipe/'+ item.id}>
               <img src={item.image} alt={item.title} />
               <p>{item.title}</p>
            </Link>  
        </div>
      ))}
    </div>
  </div>
);
}
