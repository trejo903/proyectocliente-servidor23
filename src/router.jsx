import {createBrowserRouter} from 'react-router-dom'
import Layaout from './layaout/Layaout'
import AuthLayaout from './layaout/AuthLayaout'
import Inicio from './views/Inicio'
import Login from './views/Login'
import Registro from './views/Registro'
import Blog from './views/Blog'
import Remember from './views/Remember'
import Confirmar from './views/Confirmar'
import Page01 from './game-stack/Page01'
import Publicaciones from './game-stack/Publicaciones'
import Perfil from './game-stack/Perfil'
import Mensajes from './game-stack/Mensajes'
import Videojuegos from './views/Videojuegos'
import Prueba from './layaout/Prueba'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layaout/>,
        children:[
            {
                index: true,
                element: <Inicio/>
            },
            {
                path:'/Blog',
                element:<Blog/>
            },
            {
                path:'/videojuegos',
                element:<Videojuegos/>
            }
        ]
    },
    {
        path:'/auth',
        element:<AuthLayaout/>,
        children:[
            {
                path:'/auth/login',
                element:<Login/>
            },
            {
                path:'/auth/registro',
                element:<Registro/>
            },
            {
                path:'/auth/remember',
                element:<Remember/>
            },{
                path:'/auth/password',
                element:<Confirmar/>
            }
        ]
    },
    {
        path:'/inicio',
        element:<Page01/>,
        children:[
            {
                path:"/inicio/publicaciones",
                element:<Publicaciones/>
            },
            {
                path:"/inicio/perfil",
                element:<Perfil/>
            },
            {
                path:"/inicio/mensajes",
                element:<Mensajes/>
            }
        ]
    }
])

export default router