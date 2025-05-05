import React, { useEffect, useState } from 'react'
import BottlesData from '../BottlesData/BottlesData';
import './Bottles.css'
import { addToLs, localGet, removeCall } from '../../utilites/localStoreg';
import Cart from '../CartStorage/Cart';

export default function Bottles() {
    const [bottles, setBottles] = useState([]);
    const [card, setCard] = useState([])
    useEffect(()=>{
    fetch('BotolData.json')
    .then(res => res.json())
    .then(data => setBottles(data))
    } ,[])

    // local storeh
   useEffect(()=>{
  // ak babe
     if(bottles.length){
    const localUseEffact = localGet()
    const bottlesArray = []
    for(const ides of localUseEffact){
     const bottlefind = bottles.find((sigel)=> sigel.id === ides);
     if(bottlefind){
      bottlesArray.push(bottlefind)
     }
    }
    setCard(bottlesArray)

     }
   },[bottles])


    const handaleClick = (bottle)=>{
      const isCard = card.find((p)=> p.id == bottle.id)
      if(isCard){
        alert('button dabul click')
      }else{
         const newCard = [...card, bottle];
      setCard(newCard)
      addToLs(bottle.id)
      }
     
    }

    const handaleRemove = (id) =>{
      const clearLocal = card.filter((idx) => idx.id !== id);
      setCard(clearLocal)
      removeCall(id)
    }

  return (
    <div className='card-item'>
    <h1>bottles {bottles.length}</h1> 
    <Cart cart={card} handaleRemove={handaleRemove}></Cart>
     {/* {
    card.map((cd)=> <h4 key={cd.id}>{cd.name}</h4>)
    }   */}

   
  <div className='card'>
  {
    bottles.map((data)=><BottlesData handaleClick={handaleClick} key={data.id} bottles={data}></BottlesData>)
    }
  </div>
    </div>
  )
}
