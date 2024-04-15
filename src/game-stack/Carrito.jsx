import '../assets/publicaciones.css'
function Carrito({cart,removeFromCart,increaseQuantity,decrementar,clearCart,isEmpty,cartTotal}){
    return(
        <header className="">
        <div className="">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-8 col-md-3">
                    <a href="index.html">
                        
                    </a>
                </div>
                <nav className="">
                    <div 
                        className=""
                    >
                        

                        <div id="carrito" className="">
                            {isEmpty?(
                                 <p className="text-center">El carrito esta vacio</p>
                            ):(
                                <>
                            <table className="w-100 table">
                                <tbody>
                                    {cart.map(guitar=>(
                                    <tr key={guitar.id}>
                                        <div>
                                            <div className='carrito1'>
                                            <td>
                                                <img className="img234" src={`/imagenes/${guitar.image}.jpg`} alt="" />
                                            </td>
                                            </div>
                                            <div className='flex'>
                                            <td>{guitar.name}</td>
                                        <td className="padding09">
                                                ${guitar.price}
                                        </td>
                                        <td className="espacio">
                                            <button
                                                type="button"
                                                className="padding09"
                                                onClick={()=>decrementar(guitar.id)}
                                            >
                                                -
                                            </button>
                                                {guitar.quantity}
                                            <button
                                                type="button"
                                                className="padding09"
                                                onClick={()=>increaseQuantity(guitar.id)}
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="padding09"
                                                type="button"
                                                onClick={()=>removeFromCart(guitar.id)}
                                            >
                                                X
                                            </button>
                                        </td>
                                            </div>
                                        </div>
                                        
                                        
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                                 
                            <p className="">Total pagar: <span className="fw-bold">${cartTotal}</span></p>
                            <button className="vaciar" onClick={clearCart}>Vaciar Carrito</button>
                            </>
                            )}
                            </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    )
}

export default Carrito