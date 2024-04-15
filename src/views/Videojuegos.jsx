import { useState } from "react"
import {videojuegos} from "../data/videojuegos"
import {Wallet, initMercadoPago} from '@mercadopago/sdk-react'
import Game from "./Game"
import axios from "axios";
function Videojuegos(){
    const[informacion,setinformacion]=useState(videojuegos);
    const[id,setid]=useState(null);
    initMercadoPago("TEST-747dc00a-be21-40ed-9c8d-69d320eacdc5");
    const recibirdatos=async()=>{
        try {
            const respuesta = await axios.post("http://localhost:8080/create_preference",{
                description: "Rosa conenta",
                price: 100,
                quantity: 1,
            })
            console.log(respuesta)
            const{id}=respuesta.data
            return id;
        } catch (error) {
            console.log(error)
        }
        
    }
    const comprar= async()=>{
        const identificador=await recibirdatos();
        if(identificador){
            setid(identificador)
        }
    }
    return(
        <div className="">
            {informacion.map(juego=>
            (
                <div>
                <div>
                    <Game id={id} key={juego.id} juego={juego}/>
                    <button onClick={comprar} className="bg-emerald-500">Pagar</button>
                </div>
                </div>
                
                
            )
            )}
            {id&&<Wallet initialization={{id:id}}/>}
        </div>
    )
}

export default Videojuegos