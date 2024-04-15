import {Outlet,Link} from 'react-router-dom'
export default function AuthLayaout() {
  return (
    <>
    
      <main className='md:grid md:grid-cols-2'>
      <div className='md:flex md:flex-col md:items-center md:justify-center'>
      <Outlet/>
      </div>
    
      </main>
    
    </>
    
  )
}