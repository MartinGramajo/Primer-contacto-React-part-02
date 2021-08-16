import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Card from './Components/Card';
import Publicidad from './Components/Publicidad';
import Footer from './Components/Footer';

const servicios = [
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/655/090/non_2x/vector-smartphone-games-cartoons.jpg",
    titulo: "Locate with app",
    descripcion:"Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
  },
  {
    image: "https://i.pinimg.com/originals/8b/3c/a5/8b3ca5495cb02bf5b2a9a73e210c065d.jpg",
    titulo: "Pick your Scooter",
    descripcion:"We show the most important info for the scooter closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
  },
  {
    image: "https://image.freepik.com/free-vector/girl-scooter_23-2147704218.jpg",
    titulo: "Enjoy the ride",
    descripcion: "Scan the QR code and the bike will unlock. Retract the cable lock, put onn a helmet, and you're off! Always lock bikes away from walkways.",
  }
];

const articulos = [
  {
    image: "https://images.unsplash.com/photo-1598870783716-1c5f0f890aa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    titulo: "Easy to use riding telemetry",
    descripcion:"The scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
  },
  {
    image: "https://images.unsplash.com/photo-1502514276381-1ea51dfe201c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80",
    titulo: "Coming to a city near you",
    descripcion:"Scoot is available in 4 major cities so far. We're expanding rapidly, so be sure to let us know if you want to see us in your hometown. We're aiming to let our scooters loose on 23 cities over the coming year.",
  },
  {
    image: "https://images.unsplash.com/photo-1614260937041-bf8d795cf0bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    titulo: "Zero hassle payments",
    descripcion: "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can asol link you PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.",
  }
]

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <div className="container d-flex">
        {servicios.map((servicio) => 
          <Card data={servicio} />
        )}
      </div>
      <div>
        {articulos.map((articulo) =>
          <Publicidad data={articulo} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
