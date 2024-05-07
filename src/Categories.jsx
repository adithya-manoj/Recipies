import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'


function Categories() {
  const [category,setCategory] = useState([]);
  
  useEffect(()=>{
    let fetchData = async()=>{
      let response=await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      console.log(response);
      setCategory(response.data.categories)
    }
    fetchData();
  },[])
  return (
    <div>
    <h2 className='text-center m-3 p-3'>Categories</h2>
      <div className='d-flex flex-wrap m-3 justify-content-center '>

        {category.map((item)=>(
          <Link to={`/categories/${item.strCategory}`}>

          <Card style={{ width: '18rem', margin:'1rem'}}>
      <Card.Img variant="top" src={item.strCategoryThumb} />
      <Card.Body>
        <Card.Title className='text-center'>{item.strCategory}</Card.Title>
      </Card.Body>
    </Card>
          </Link>
      ))}
      </div>
    </div>
  )
}

export default Categories