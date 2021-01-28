import React from 'react';
import Image from 'react-bootstrap/Image';
import iconos from '../images/iconosMas.jpg';
import bancos from '../images/groupBank.png';
import juntas from '../images/logoJuntas.jpg';

const Home = () => (
  <>
    <section id="home" className="padded">
      <Image src="https://assets.entrepreneur.com/content/3x2/2000/20180821212333-emprendeora.jpeg?width=700&crop=2:1.jpg" fluid />
      <div className="referenc2">
        <p className="hola">
          Somos una plataforma virtual que busca el
          empoderamiento femenino mediante el crecimiento
          economico de las mujeres emprendedoras.
        </p>
        <button type="button" className="conocerMas"> Conocer más </button>
      </div>
      <div>
        <p>
          ---------------------------------
        </p>
        <p>
          Beneficios de ser parte de juntas
        </p>
        <img src={iconos} className="btn-log-out" alt="logout" />
        <button type="button" className="conocerMasUnirme"> Quiero unirme </button>
        <button type="button" className="conocerMas"> Comparar tasas </button>
        <p>
          ---------------------------------
        </p>
        <p>
          Beneficios de ser parte de juntas
        </p>
        <img src={bancos} className="btn-log-outBank" alt="logout" />
        <img src={juntas} className="img" alt="juntas" />
        <p>
          ---------------------------------
        </p>
        <p>
          ¡Únete a las más de 5000
          mujeres emprendedora que
          siguen creciendo!
        </p>
      </div>
    </section>
  </>
);

export default Home;

// Home.propTypes = {
//   handleInputChange: PropTypes.func.isRequired,

//   submitForm: PropTypes.func.isRequired,
// };
