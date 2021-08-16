import React from 'react'
import './publicidad.css'
import { Image, Button } from 'react-bootstrap'

export default function Publicidad(props) {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <Image className="forma col-lg-6 col-sm-12 mb-5"  src={props.data.image}  roundedCircle/>
                    <div class="col-lg-6 col-sm-12 m-auto">
                        <h2>{props.data.titulo }</h2>
                        <p className="mt-4"> {props.data.descripcion}</p>
                        <Button variant="warning" size="lg">Learn More</Button>{' '}
                    </div>
                </div>
            </div>
        </div >
    )
}
