export default function Nota({articulo}) {
    const {titulo,imagen,descripcion}=articulo
  return (
    <div className="border-solid border-2 border-black md:flex">
        <img className="w-full md:w-1/3 md:basis-2/6" src={`../../public/imagenes/${imagen}.jpg`} alt={`imagen ${imagen}`} />
        <div className="md:flex md:items-center md:basis-4/6 md:ml-5">
        <div>
        <h2 className="text-center text-xl font-semibold mt-2 md:text-left">{titulo}</h2>
        <p className=" text-center text-lg font-light py-4 md:text-left">{descripcion}</p>
        </div>
        </div>
    </div>
  )
}
