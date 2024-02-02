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
        // <div>
        //     <h2>My Favorite Recipes</h2>
        //     <ul>
        //         {favorites.map(recipe => (
        //             <li key={recipe._id}>
        //                 <h3>{recipe.title}</h3>
        //                 <img src={recipe.image} alt={recipe.title} style={{ width: "100px" }} />
        //                 <p>{recipe.instructions}</p>
        //             </li>
        //         ))}
        //     </ul>
        // </div>
        <>
        {favorites.map((recipe) => (
            <div key={recipe._id}>
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt={recipe.title} />
                <div dangerouslySetInnerHTML={{__html: recipe.instructions}}></div>
                <ul>
                    <h4>Ingredients</h4>
                    {recipe.extendedIngredients.map((ingredient, index) => (
                        <li key={`${ingredient.id}-${index}`}>{ingredient.original}</li>
                    ))}
                </ul>
   
            </div>
        ))}
    </>
    );
}


