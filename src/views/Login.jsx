import {createRef,useState} from 'react'
import { Outlet,Link} from 'react-router-dom'
import clienteAxios from '../config/axios';
import Alerta from '../game-stack/Alerta';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const nameRef = createRef();
  const passwordRef = createRef();
  const [errores,seterrores]=useState([])
  const{login}=useAuth({
    middleware:'guest',
    url:'/inicio/publicaciones'

  });
  const handleSubmit = async e =>{
    e.preventDefault();
    const datos={
      name:nameRef.current.value,
      password:passwordRef.current.value
    }
     
    login(datos,seterrores)
  }
  return (
    <>
    
    <div className="Registro">
    
        <div className="wrapper">
        
            <form onSubmit={handleSubmit} noValidate>
            {errores ? errores.map((error)=><Alerta key={error}>{error}</Alerta>):null}
                <h2>Login</h2>
                <div className="input-box">
                    <span className="icon"><ion-icon name="person"></ion-icon></span>
                    <input type="text" name='name' placeholder="Nombre de usuario"required id="name"  ref={nameRef}/>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                    <input type="password" placeholder="Contrasena" ref={passwordRef} id='password' name='password' required/>
                </div>
                <div className="contrasena-olvidada">
                    <a href="/auth/remember">Olvido su contraseña?</a>
                </div>
                <button type="submit" value="Aceptar">Ingresar</button>
                <div className="SinCuenta">
                    <p>  No tienes cuenta?  <a href="/auth/registro">    Crea una! </a></p>
                </div>
            </form>
        </div>
    </div>
    </>
    
  )
}
