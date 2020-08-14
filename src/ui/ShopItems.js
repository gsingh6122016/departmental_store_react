import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const ShopItems = ({item}) => {
    return (
        <div className='card'>
            <div className = 'card-inner'>
                <ul>
                    <li>
                        <strong>Item Name: </strong><Link to={`/shop/${item.id}`}>{item.name}</Link>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default ShopItems
