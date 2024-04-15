import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { personOutline, peopleOutline, cartOutline, compassOutline, peopleCircleOutline, basketballOutline, rocketOutline, bonfireOutline, contractOutline, skullOutline } from 'ionicons/icons'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useAuth } from '../hooks/useAuth'

function Page01() {
    const {user,error,logout}=useAuth({middleware:'auth'})
  return (
    <>
        <div className="sidebar">
            <div className="sidebar-header">
            <p>@{user?.name}</p>
            </div>
            <ul className="menu">
                <li><Link to="/inicio/perfil"><ion-icon icon={personOutline}></ion-icon> Cuenta</Link></li>
                <li><Link to="/amigos"><ion-icon icon={peopleOutline}></ion-icon> Amigos</Link></li>
                <li><Link to="/grupos"><ion-icon icon={peopleCircleOutline}></ion-icon> Grupos</Link></li>
                <li><Link to="/carrito"><ion-icon icon={cartOutline}></ion-icon> Carrito</Link></li>
                <li><Link to="/inicio/publicaciones"><ion-icon icon={compassOutline}></ion-icon> Explorar</Link></li>
            </ul>
            <h1 className='Categorias'>Categorias</h1>
            <ul className="menu2">
                <li><Link to="/cuenta"><ion-icon icon={skullOutline}></ion-icon> Pelea</Link></li>
                <li><Link to="/amigos"><ion-icon icon={contractOutline}></ion-icon> Shooters</Link></li>
                <li><Link to="/grupos"><ion-icon icon={bonfireOutline}></ion-icon> Supervivencia</Link></li>
                <li><Link to="/carrito"><ion-icon icon={rocketOutline}></ion-icon> Aventura</Link></li>
                <li><button onClick={logout} >Cerrar Sesion</button></li>
            </ul>
        </div>
        <div className="navbarr">
            <div className='navbarr-placeholder'>
                <input type="text" placeholder="Buscar videojuego..."/>
                <button type="submit">Buscar</button>
            </div>
        </div>
        <Outlet/>
    </>
  );
}

export default Page01;