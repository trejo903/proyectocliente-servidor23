import { Outlet, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


export default function Layaout() {
  return (
      <div className='inicio'>
             <div className="bubbles">
              <span style={{"--i":30}}></span>
              <span style={{"--i":21}}></span>
              <span style={{"--i":18}}></span>
              <span style={{"--i":22}}></span>
              <span style={{"--i":12}}></span>
              <span style={{"--i":10}}></span>
              <span style={{"--i":8}}></span>
              <span style={{"--i":17}}></span>
              <span style={{"--i":19}}></span>
              <span style={{"--i":15}}></span>
              <span style={{"--i":8}}></span>
              <span style={{"--i":6}}></span>
              <span style={{"--i":12}}></span>
              <span style={{"--i":11}}></span>
              <span style={{"--i":18}}></span>
              <span style={{"--i":21}}></span>
              <span style={{"--i":15}}></span>
              <span style={{"--i":19}}></span>
              <span style={{"--i":22}}></span>
              <span style={{"--i":20}}></span>
              <span style={{"--i":22}}></span>
              <span style={{"--i":25}}></span>
              <span style={{"--i":23}}></span>
              <span style={{"--i":22}}></span>
              <span style={{"--i":12}}></span>
              <span style={{"--i":15}}></span>
              <span style={{"--i":17}}></span>
              <span style={{"--i":19}}></span>
              <span style={{"--i":22}}></span>
              <span style={{"--i":12}}></span>
              <span style={{"--i":14}}></span>
              <span style={{"--i":10}}></span>
              <span style={{"--i":18}}></span>
              <span style={{"--i":17}}></span>
              <span style={{"--i":15}}></span>
              <span style={{"--i":16}}></span>
              <span style={{"--i":12}}></span>
              <span style={{"--i":11}}></span>
              <span style={{"--i":18}}></span>
            </div>
            <div>
            <img src="/imagenes/snes.png" alt="Imagen Texto" className='SnesPad' style={{width: '600px', height: 'auto'}}/>
            <Swiper rewind={true} navigation={true} modules={[Navigation]} >
              <SwiperSlide>
              <Link className='gs my-3 font-semibold text-[#7dd3fc] md:ml-10 md:mt-3 md:mb-3 text-7xl py-2' to="/">Game-Stack</Link>
                </SwiperSlide>
              <SwiperSlide>
                <Link className=' registrarse my-3 font-semibold text-[#ef7878] md:ml-10 md:mt-3 md:mb-3 text-7xl py-2' to="/auth/registro">Registrarse</Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link className=' ini my-3 font-semibold text-[#85ea74] md:ml-10 md:mt-3 md:mb-3 text-7xl py-2' to="/auth/login">Iniciar-Sesion</Link>
              </SwiperSlide>
            </Swiper>
            </div>
        <Outlet/> 
      </div>
    );
}
