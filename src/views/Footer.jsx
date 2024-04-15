export default function Footer() {
  return (
    <>
        <div className='bg-blue-600 text-center py-4 md:pt-0 md:pb-4'>
          <div className='md:flex md:gap-8 md:py-6'>
          <div className='md:ml-7 md:mt-3 md:mb-3'>
            <h1 className='text-white text-3xl font-semibold my-3'>Intereses</h1>
            <ul>
              <li className='text-white font-thin my-2 cursor-pointer'>¿Para que sirve?</li>
              <li className='text-white font-thin my-2 cursor-pointer'>¿Que puedo hacer?</li>
              <li className='text-white font-thin my-2 cursor-pointer'>¿Cuales son las edades <br/> permitidas?</li>
            </ul>
          </div>
          <div className='md:ml-7 md:mt-3 md:mb-3'>
            <h1 className='text-white text-3xl font-semibold my-3'>Contribuir</h1>
            <ul>
              <li className='text-white font-thin my-2 cursor-pointer'>Deseas Donar</li>
              <li className='text-white font-thin my-2 cursor-pointer'>Metas Deseadas</li>
              <li className='text-white font-thin my-2 cursor-pointer'>Que se hace con <br/> lo recaudado</li>
            </ul>
          </div>
          <div className='md:ml-7 md:mt-3 md:mb-3'>
            <h1 className='text-white text-3xl font-semibold my-3' >Ayuda</h1>
            <ul>
              <li className='text-white font-thin my-2 cursor-pointer'>Perdi mi cuenta</li>
              <li className='text-white font-thin my-2 cursor-pointer'>Reportar un problema</li>
              <li className='text-white font-thin my-2 cursor-pointer'>No recuerdo mi numero <br/> de telefono</li>
            </ul>
          </div>
          <div className='md:ml-7 md:mt-3 md:mb-3'>
            <h1 className='text-white text-3xl font-semibold my-3' >Game-Stack</h1>
            <ul className='flex justify-center gap-2'>
              <li className='w-12 cursor-pointer'><img src="../../public/iconos/facebook.svg" alt="" /></li>
              <li className='w-12 cursor-pointer'><img src="../../public/iconos/instagram.svg" alt="" /></li>
              <li className='w-12 cursor-pointer'><img src="../../public/iconos/square-x-twitter.svg" alt="" /></li>
            </ul>
          </div>
          </div>
        </div> 
    </>
  )
}
