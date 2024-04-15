import Nota from './Nota.jsx'
import useBlog from '../hooks/useBlog.js'
export default function Blog() {
  const {blog} = useBlog();
  return (
    <>
    <div className='text-center my-3 md:text-left md:ml-7'>
      <h1 className='text-2xl font-medium'>Tu comunidad favorita</h1>
      <p className='text-xl font-light'>Encuentra los consejos que necesitas saber</p>
    </div>
    <div className='flex flex-col gap-1 px-1 py-1 md:grid md:grid-cols-1'>
      {
        blog.map(articulo=>(
          <Nota
          key={articulo.id}
          articulo={articulo}
          />
        ))
      }
    </div>
    </>
  )
}
