import '../assets/publicaciones.css'
import { useCart } from '../hooks/useCart'
import Carrito from './Carrito'
import Elemento from './Elemento'
export default function Publicaciones() {
    const {
        data,
           cart,addToCart,
           clearCart,
           decrementar,
           increaseQuantity,
           removeFromCart,
           isEmpty,
           cartTotal
      }= useCart()
  return (
    <>
        <div className='objeto'>
            <div className='articulos xd height34'>
            {data.map((guitar)=>
          (
            <Elemento
            key={guitar.id}
            guitar={guitar}
            addToCart={addToCart}
            />    
          )
        )}  
            </div>
            <div className='carrito xd height34'>
                <Carrito
                cart={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity}
                decrementar={decrementar} clearCart={clearCart} isEmpty={isEmpty} cartTotal={cartTotal}
                />
            </div>
        </div>
    </>
  )
}
