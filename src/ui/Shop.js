import React, { useState, useEffect } from 'react'
import '../App.css'; 
import axios from 'axios';
import ShopItems from './ShopItems'


function Shop() {

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(
                'https://5f33e9c1cfaf5a001646b758.mockapi.io/api/v0/product'   
            )
            
            setItems(result.data);
        }
        fetchItems();
    },[]);

    const [items, setItems] = useState([])

    return (
        <section className='cards'>
            {items.map(item => (
                <ShopItems key = {item.id} item={item} />         
      ))}
        </section>
    )
}


export default Shop
