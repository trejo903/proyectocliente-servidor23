import { createRef, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import clienteAxios from '../config/axios';
import Alerta from '../game-stack/Alerta';
import { useAuth } from '../hooks/useAuth';
export default function Registro() {
  const nameRef = createRef();
  const apellidoRef = createRef();
  const userRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmedRef = createRef();
  const [errores, seterrores] = useState([]);
  const{registro}=useAuth({middleware:'guest',url:'/inicio/publicaciones'})
  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos = {
      name: nameRef.current.value,
      apellido: apellidoRef.current.value,
      user: userRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmedRef.current.value
    };
    registro(datos,seterrores)
  };
  
  return (
    <>
    
      <div className='Registro'>
        <div className="Wrapper3">
          {errores ? errores.map((error) => <Alerta key={error}>{error}</Alerta>) : null}
          <h1>Regístrate</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-box3">
              <input
                name="nombre"
                type="text"
                placeholder="Nombre"
                ref={userRef}
              />
            </div>
            <div className="input-box3">
              <input
                name="apellido"
                type="text"
                placeholder="Apellido"
                ref={apellidoRef}
              />
            </div>
            <div className="input-box3">
              <input
                name="name"
                type="text"
                id="name"
                placeholder="Usuario"
                ref={nameRef}
              />
            </div>
            <div className="input-box3">
              <input
                name="password"
                type="password"
                id="password"
                placeholder="Contraseña"
                ref={passwordRef}
              />
            </div>
            <div className="input-box3">
              <input
                name="rpassword" type="password" id="Repetir-password" placeholder="Repetir Contraseña"
                ref={passwordConfirmedRef}
              />
            </div>
            <button type="submit">Crear Cuenta</button>
          </form>
          <div className="Concuenta">
            <p>
              ¿Ya tienes cuenta? <Link to="/auth/login">Inicia Sesión</Link>
            </p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}