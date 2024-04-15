export default function Confirmar() {
  return (
    <>
      <div className="bg-sky-800 text-white  md:w-96">
      <div className="md:flex md:flex-col">
        <h1 className="text-center text-2xl py-2 font-bold">Introduce tu nueva contraseña</h1>
        <form className="">
          <fieldset>
            <input className="flex h-16 w-full text-black" type="password" id="confirm-password" placeholder="Contraseña" />
            <input className="flex h-16 w-full text-black" type="password" id="password" placeholder="Confirma tu nueva contraseña" />
          </fieldset>
          <input className="font-semibold w-full h-12 text-white md:mb-0  cursor-pointer bg-green-700 hover:bg-green-900 uppercase text-sm" type="submit" value="Aceptar" />
        </form>
      </div>
    </div>
    </>
  )
}
