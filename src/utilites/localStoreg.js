const localGet = () =>{
const storeItem = localStorage.getItem('cart');
if(storeItem){
return JSON.parse(storeItem);
}
return [];
}


const localSet = (cart)=>{
const storegItem = JSON.stringify(cart);
localStorage.setItem('cart',storegItem);
}

const addToLs = (id) =>{
const local = localGet();
local.push(id);
localSet(local);
}

const removeCall = (id) =>{
const removes = localGet()
const clearRemoveLocal = removes.filter((idx) => idx !== id);
localSet(clearRemoveLocal)
// console.log(id)
}

export {addToLs, localGet , removeCall};