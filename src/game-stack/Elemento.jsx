import '../assets/publicaciones.css'
export default function Elemento({guitar,addToCart}) {
    const{id,name,image,description,price}=guitar
  return (
    <div className="">
                <div className="">
                    <img className="img234" src={`/imagenes/${image}.jpg`}/>
                </div>
                <div className="textalign89">
                    <h3 className="elementopadding fontzise">{name}</h3>
                    <p className='elementopadding bold901'>{description}</p>
                    <p className="elementopadding bold90">${price}</p>
                </div>
                <button 
                        type=""
                        className="azul1"
                        onClick={()=> addToCart(guitar)}
                    >Agregar al Carrito</button>
    </div>
  )
}
