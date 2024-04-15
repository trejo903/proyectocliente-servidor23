import { useState,useEffect,useMemo} from "react"

import { db } from "../data/juegos";


const useCart=()=>{
    const initialCart=()=>{
        const localStorageCart=localStorage.getItem('carrito')
        return localStorageCart? JSON.parse(localStorageCart):[]
      }
      const[data]=useState(db)
      const[cart,setCart]=useState(initialCart)
      const MAX_ITEMS = 5
    
      useEffect(()=>{
        localStorage.setItem('carrrito',JSON.stringify(cart))
      },[cart])
      function addToCart(item){
    
        const itemExists=cart.findIndex((guitar)=>guitar.id===item.id)
        if(itemExists>=0){
          if(cart[itemExists].quantity>=MAX_ITEMS)return
          const updateCart=[...cart]
          updateCart[itemExists].quantity++
          setCart(updateCart)
        }else{
          item.quantity=1
        setCart([...cart,item])
        }
      }
      function removeFromCart(id){
        setCart(prevCart=>prevCart.filter(guitar=>guitar.id!==id))
      }
      function increaseQuantity(id){
        const updatedCart=cart.map(item=>{
          if(item.id===id&&item.quantity<MAX_ITEMS){
            return{
              ...item,
              quantity:item.quantity+1
            }
          }
          return item
        })
        setCart(updatedCart)
      }
      function decrementar(id){
        const decrementarcarrito=cart.map(item=>{
          if(item.id===id&&item.quantity>1){
            return{
              ...item,
              quantity:item.quantity-1
            }
          }
          return item
        })
        setCart(decrementarcarrito)
      }
      function clearCart(e){
        setCart([])
      }
    const isEmpty=useMemo(()=>cart.length===0,[cart])
    const cartTotal=useMemo(()=>cart.reduce((total,item)=>total+(item.quantity*item.price),0),[cart])
    return{
       data,
       cart,addToCart,
       clearCart,
       decrementar,
       increaseQuantity,
       removeFromCart,
       isEmpty,
       cartTotal
    }
}

export{
    useCart
}