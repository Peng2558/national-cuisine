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
    
        <>
        {favorites.map((recipe) => (
            <div key={recipe._id}>
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt={recipe.title} />
                <h2>Instructions</h2>
                <div dangerouslySetInnerHTML={{__html: recipe.instructions}}></div>
                <ul>
                    <h2>Ingredients</h2>
                    {recipe.extendedIngredients.map((ingredient, index) => (
                        <li key={`${ingredient.id}-${index}`}>{ingredient.original}</li>
                    ))}
                </ul>
   
            </div>
        ))}
    </>
    );
}


