import React, { useEffect, useState } from 'react';
import * as recipesAPI from '../../utilities/recipes-api'; 

export default function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);
    const fetchFavorites = async () => {
        try {
            const fetchedFavorites = await recipesAPI.fetchFavorites(); 
            setFavorites(fetchedFavorites);
        } catch (error) {
            console.error("Failed to fetch favorites:", error);
        }
    };
    useEffect(() => {
        fetchFavorites();
    }, []);

    return (
        <div>
            <h2>My Favorite Recipes</h2>
            <ul>
                {favorites.map(recipe => (
                    <li key={recipe._id}>
                        <h3>{recipe.title}</h3>
                        <img src={recipe.image} alt={recipe.title} style={{ width: "100px" }} />
                        <p>{recipe.instructions}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}


