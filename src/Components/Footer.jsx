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
            <Nav.Link href="#action1">About</Nav.Link>
            <Nav.Link href="#action2">Location</Nav.Link>
            <Nav.Link href="#action2">Carrers</Nav.Link>
            <div className=" d-flex m-auto mx-5 mb-1 fs-1 ">
              <Nav.Link href="#action1"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
              <Nav.Link href="#action1"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
              <Nav.Link href="#action1"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
          </div>
          </Nav>
          <hr />
        </div>
        <div className="row">
          <p className="col-sm-12 m-auto d-flex justify-content-center">
            &copy;{new Date().getFullYear()} | All rights reserved | Terms Of
            Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
