import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


function CategoryItems() {
    const { catname } = useParams();

    const [catdata, setCatdata] = useState([]);

    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catname}`);
            console.log(response.data.meals);
            setCatdata(response.data.meals);
        };
        fetchData();
    }, [catname]);

    return (
        <div>
            <h2 className='text-center m-2 p-2'>Category Items</h2>
            <div className='d-flex flex-wrap m-2 justify-content-center  '>
                {catdata.map((item) => (
                    <Link to={`/categoryitem/${item.strMeal}`}>
                    <div>
                        <Card style={{ width: '18rem', margin: '1rem' }}>
                            <Card.Img variant="top" src={item.strMealThumb} />
                            <Card.Body>
                                <Card.Title className='text-center'>{item.strMeal}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CategoryItems;
