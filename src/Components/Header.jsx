import "./header.css";
import { Carousel, Button } from "react-bootstrap";
export default function Header() {
  return (
    <div className=" container col-lg-12 col-sm-12" id="about">
      <Carousel>
        <Carousel.Item>
          <img
            className="carouselImg"
            src="https://images.unsplash.com/photo-1623079397242-c2e809a6ef1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2076&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Compartirmos Scooter de forma sencilla</h3>
            <p>
              {" "}
              Una Scoot te elimina la molestia de la movilidad urbana. Nuestras
              motocicletas están ubicadas en lugares convenientes en puntos
              estrategicos en cada una de nuestras ciudades. Utilice nuestra
              aplicación para localizar tu Scooter más cercana, desbloquéela con
              un toque y ¡ya está!
            </p>
            <Button variant="warning">Accede a tu Scoot</Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg"
            src="https://images.unsplash.com/photo-1538895490524-0ded232a96d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=844&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Compartirmos Scooter de forma sencilla</h3>
            <p>
              {" "}
              Una Scoot te elimina la molestia de la movilidad urbana. Nuestras
              motocicletas están ubicadas en lugares convenientes en puntos
              estrategicos en cada una de nuestras ciudades. Utilice nuestra
              aplicación para localizar tu Scooter más cercana, desbloquéela con
              un toque y ¡ya está!
            </p>
            <Button variant="warning">Accede a tu Scoot</Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg"
            src="https://images.unsplash.com/photo-1572168737399-24c6f29b860a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Compartirmos Scooter de forma sencilla</h3>
            <p>
              {" "}
              Una Scoot te elimina la molestia de la movilidad urbana. Nuestras
              motocicletas están ubicadas en lugares convenientes en puntos
              estrategicos en cada una de nuestras ciudades. Utilice nuestra
              aplicación para localizar tu Scooter más cercana, desbloquéela con
              un toque y ¡ya está!!
            </p>
            <Button variant="warning">Accede a tu Scoot</Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
