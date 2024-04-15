import { Outlet } from 'react-router-dom';

export default function Registro() {
    return (
      <>
        <div className='Cuenta'>
          <div className='CuentaEdit'>
            <h1>Nombre para mostrar</h1>
            <input className='Nombre' type="text" placeholder="Nombre"/>

            <h1 className='Avatar'>Avatar</h1>
            <button className='Cambiar' type="submit"> cambiar Avatar </button>

            <button className='Guardar' type="submit"> Guardar cambios </button>

            <div className='CuentaViz'>
            <h2>Previsualizacion</h2>
            <img src="../../public/imagenes/perfil.jpg" alt="perfilimagen" style={{width: '170px', height: '168px'}} />
            <h2>Harbest321</h2>
          </div>
          </div>

        </div>
        <Outlet />
      </>
    );
  }