import { Wallet } from "@mercadopago/sdk-react"
function Game(objeto){
    return(
        <div>
           <p>{objeto.juego.name}</p>
           <p>${objeto.juego.price}</p>
           <p>{objeto.juego.descripcion}</p>
        </div>
    )
}
export default Game