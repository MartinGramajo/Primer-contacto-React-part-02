import React from 'react'
import './publicidad.css'
import { Image, Button } from 'react-bootstrap'

export default function Publicidad({ data }) {
    const { image, titulo, descripcion } = data;
    return (
        <div id="location">
            <div className="container my-5">
                <div className="row">
                    <Image className="forma col-lg-12 col-sm-6 mt-4 mb-5 m-auto"  src={image}  roundedCircle/>
                    <div className="col-lg-6 col-sm-12 m-auto text-center">
                        <h2>{titulo}</h2>
                        <p className="mt-4"> {descripcion}</p>
                        <Button className="col-lg-12 col-sm-6 m-auto "  variant="warning" size="lg">Leer Mas</Button>{' '}
                    </div>
                </div>
            </div>
        </div >
    )
}
