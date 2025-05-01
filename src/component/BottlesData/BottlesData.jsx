import React from 'react'
import './BottlesData.css'
export default function BottlesData({bottles,handaleClick}) {
    // console.log(bottles)
    const {img,ratingsCount,ratings,stock,price,seller,name,category} = bottles


   const handleClickelse = (event) => {
    if (event.detail === 2) {
      console.log("Single click");
    }
  };


    
  return (
    <div className='card-botoe'>
        <img className='img' src={img} alt="" />
        <h3>{name}</h3>
        <h3>{category}</h3>
        <hr />
        <p>seller: {seller}</p>
        <p>price: ${price}</p>
        <p>stock {stock}</p>
        <p>ratings {ratings}</p>
        <p>ratings Count {ratingsCount}</p>
        <button onClick={()=> handaleClick(bottles)}>purchase</button>
    </div>
  )
}

