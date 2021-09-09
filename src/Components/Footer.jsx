import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitterSquare, faLinkedin, faGooglePlusSquare  } from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <div className="main-footer mt-5">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h1 className="list-unstyled">
                          <li> <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /> </a>  </li>
                          <li> <a href="https://twitter.com/home" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faTwitterSquare} /> </a> </li>
                          <li> <a href="https://ar.linkedin.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} /> </a></li>
                          <li> <a href="https://myaccount.google.com/profile" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGooglePlusSquare} /> </a> </li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <ul className="list-unstyled">
              <li>Contact Us (Central Office)</li>
              <li>P : +1 253-863-8967</li>
              <li>M :Scoot@scoot.com</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <ul className="list-unstyled">
              <li>Scoot Central Office</li>
              <li>3886 Wellington Street</li>
              <li>Toronto, Ontario M9C 3J5</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Mogo Company | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
