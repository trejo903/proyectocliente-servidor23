import { useState, createRef } from 'react';
import { Link } from 'react-router-dom';
import Alerta from '../game-stack/Alerta';

export default function Remember() {
  const nameRef = createRef();
  const [errores, setErrores] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="Remember">
      <div className="Wrapper2">
        {errores ? errores.map((error) => <Alerta>{error}</Alerta>) : null}
        <form onSubmit={handleSubmit}>
          <h2>Introducir correo</h2>
          <div className="input-box2">
            <span className="icon2"><ion-icon name="person"></ion-icon></span>
            <input type="text" name='name' placeholder="Correo electrónico" required id="name" ref={nameRef} />
          </div>
          <button type="submit"><Link className='' to="/auth/Remember2">Ingresar</Link></button>
        </form>
      </div>
    </div>
  );
}