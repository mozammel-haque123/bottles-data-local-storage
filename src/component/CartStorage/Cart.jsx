import './Cart.css'
export default function Cart({cart,handaleRemove}) {
    // console.log(cart)
  return (
    <div>
       <h3> Cart: {cart.length}</h3>
       {
        cart.map((lop)=> {
        return(
     <div> 
       <p>{lop.name}</p>
       <div key={lop.id} className='cart-flex' > <img className='cart' src={lop.img} alt={lop.name}  /> 
       <button onClick={()=>handaleRemove(lop.id)}>Remove</button></div>
       <p>-------------------------</p>
        </div>
        ) 
        }
    )
       }
    </div>
  )
}
