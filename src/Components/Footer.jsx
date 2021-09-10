import { Nav, Navbar } from "react-bootstrap";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="main-footer mt-2">
      <div className="container">
        <div className="row text-white d-flex justify-content-evenly">
          <Nav className=" justify-content-center">
            <Navbar.Brand href="#"> <FontAwesomeIcon icon={faMotorcycle} /> Scoot</Navbar.Brand>
            <Nav.Link href="#about">Sobre nosotros</Nav.Link>
            <Nav.Link href="#services">Servicios</Nav.Link>
            <Nav.Link href="#location">Localizacion</Nav.Link>
            <div className=" d-flex m-auto mx-5 mb-1 fs-1 ">
              <Nav.Link href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
              <Nav.Link href="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
              <Nav.Link href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
          </div>
          </Nav>
          <hr />
        </div>
        <div className="row">
          <p className="col-sm-12 m-auto d-flex justify-content-center">
            &copy;{new Date().getFullYear()} | Todos los derechos reservados | Mago company 2021
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
