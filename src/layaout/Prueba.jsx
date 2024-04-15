import {Outlet,Link} from 'react-router-dom'

export default function Prueba() {
  return (
    <>
        <div className=''>
        <Link className='' to="/">Game-Stack</Link>
        <nav className=''>
          <Link className='' to="/Videojuegos">Videojuegos</Link>
          <Link className='' to="/Blog">Blog</Link>
          <Link className='block text-xl font-thin text-center my-3 p-2 hover:bg-blue-500 text-white border-solid border-2 border-white rounded-md  hover:text-white' to="/auth/login">Iniciar Sesion</Link>
          
        </nav>
        </div>
        
        
    </>
  )
}
