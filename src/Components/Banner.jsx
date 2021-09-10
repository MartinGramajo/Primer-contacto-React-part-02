import React from "react";
import { Button } from "react-bootstrap";
import "./banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

export default function Banner() {
  return (
    <div className=" container banner">
      <div className="row">
        <div className="col-md-6 m-auto">
          <h1 className="text-white fs-1">Regístrate y lárgate hoy mismo!</h1>
        </div>
        <div className="col-md-6 m-auto p-1 mb-2">
          <Button className="my-5 mx-5 p-2" variant="outline-dark">
            <span className="text-white">Disponible en AppStore </span>
            <div>
              <FontAwesomeIcon className="fs-1 mx-1" icon={faApple} />
            </div>
          </Button>
          <Button className="my-5 mx-5 p-2"variant="outline-dark">
            <span className="text-white">Disponible en GooglePlay </span>
            <div>
              <FontAwesomeIcon className="fs-1 mx-1" icon={faGooglePlay} />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
