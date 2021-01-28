import React from 'react';
import juntas from '../images/logoJuntas.jpg';
import goo from '../images/goo1.png';
import IniciarSesion from './IniciarSesion';

const Login = () => (
  <>
    <section id="servicios" className="padded">
      <img src={juntas} className="img" alt="juntas" />
      <div className="referenc2">
        <p>
          ---------------------------------
        </p>
        <h4 className="hola">
          Ingresa a tu comunidad
        </h4>
        <p>
          ¿Aún no te has registrado?
        </p>
        <img src={goo} className="goo" alt="logout" />
        <p>
          -- O accede a tu cuenta de Juntas --
        </p>
        <div className="contraseñaEmail"> Nombre de usuario o email</div>
        <input type="text" placeholder="email" className="inputInicio" />
        <div className="contraseñaEmail"> Contraseña</div>
        <input type="text" placeholder="email" className="inputInicio" />
        <div className="contraseñaOlvidada"> ¿Has olvidado tu contraseña?</div>
        <IniciarSesion />
      </div>
    </section>
  </>
);

export default Login;
