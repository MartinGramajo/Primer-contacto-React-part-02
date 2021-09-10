import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Card from './Components/Card';
import Publicidad from './Components/Publicidad';
import Footer from './Components/Footer';
import React from 'react';
import TitleCard from './Components/TitleCard';
import Banner from './Components/Banner';

const servicios = [
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/655/090/non_2x/vector-smartphone-games-cartoons.jpg",
    titulo: "Localiza con la App",
    descripcion: "Utilice la aplicación para encontrar el scooter más cercano. Continuamente  estamos colocamos scooters en las áreas con mayor demanda, por lo que una nunca debe estar demasiado lejos de tu camino.",
  },
  {
    image: "https://i.pinimg.com/originals/8b/3c/a5/8b3ca5495cb02bf5b2a9a73e210c065d.jpg",
    titulo: "Elige tu scooter",
    descripcion: "Mostramos toda la información  necesaria e importante del scooter más cercano a nuestros usuarios. Para que sepa cuánta carga les queda y puede ver aproximadamente cuánto costará",
  },
  {
    image: "https://image.freepik.com/free-vector/girl-scooter_23-2147704218.jpg",
    titulo: "Disfruta del viaje",
    descripcion: "Escanee el código QR y la moticleta se desbloqueará. ¡Quite el candado del cable, póngase el casco y listo!. Siempre tenga todos los cuidados al manejar y respete las señales de transito!.",
  }
];

const articulos = [
  {
    image: "https://images.unsplash.com/photo-1598870783716-1c5f0f890aa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    titulo: "Contamos con un sistema de Telemetría de conducción fácil de usar",
    descripcion: "La aplicación Scoot está disponible con telemetría de conducción. Esto significa que puede mostrarle su velocidad promedio, cuánto tiempo ha estado usando el scooter, su distancia de viaje y muchas más cosas, todo en una aplicación fácil de usar.",
  },
  {
    image: "https://images.unsplash.com/photo-1502514276381-1ea51dfe201c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80",
    titulo: "Expandiendonos en ciudades",
    descripcion: "Scoot está disponible en 4 ciudades importantes hasta ahora. Nos estamos expandiendo rápidamente, así que asegúrese de informarnos si desea vernos en su ciudad. Nuestro objetivo es que nuestros scooters se suelten en 23 ciudades durante el próximo año.",
  },
  {
    image: "https://images.unsplash.com/photo-1614260937041-bf8d795cf0bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    titulo: "Pagos sin complicaciones",
    descripcion: "Nuestras formas de pago es tan fácil como uno, dos, tres y listo. Aceptamos la mayoría de tarjetas de crédito y débito. También puedes vincular tu cuenta de PayPal dentro de la aplicación. ¿Necesitas pagar más tarde? ¡No hay problema! Puede aplazar el pago hasta un mes.",
  }
]

function App() {
  return (
    <React.StrictMode>
      <div>
        <NavBar />
        <Header />
        <TitleCard />
        <div className="container d-flex flex-wrap">
          {servicios.map((servicio, i) =>
            <Card key={i} data={servicio} />
          )}
        </div>
        <div>
          {articulos.map((articulo, i) =>
            <Publicidad key={i} data={articulo} />
          )}
        </div>
        <Banner />
        <Footer />
      </div>
    </React.StrictMode>
  );
}

export default App;
