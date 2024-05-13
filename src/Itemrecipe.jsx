import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

function Itemrecipe() {
    const { recipe } = useParams();

    const [recipedetail, setRecipedetail] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`);
                console.log(response.data.meals);
                setRecipedetail(response.data.meals);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {recipedetail.map((item) => (
                <div key={item.idMeal}>
                    <h1 className='text-center'>{item.strMeal} <FaHeart /></h1>
                    <div className='d-flex justify-content-center p-3 m-3'>
                        <img src={item.strMealThumb} alt={item.strMeal} className='w-25 h-25 rounded-2'/>
                    </div>
                    
                    <div className='p-3 m-3'>
                        <h2>Ingredients</h2>
                        <ul>
                            {Object.keys(item)
                                .filter(key => key.startsWith('strIngredient') && item[key])
                                .map(key => (
                                    <li key={key}>
                                        {item[key]}: {item[`strMeasure${key.replace('strIngredient', '')}`]}
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className='p-3 m-3'>
                        {item.strInstructions}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Itemrecipe;
