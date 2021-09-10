import React from 'react'
import "./titlecard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'

export default function TitleCard() {
    return (
        <div className="container mt-5 title-card">
            <h1>Nuestros Servicios</h1>
            <FontAwesomeIcon className="fs-1" icon={faMotorcycle} />
        </div>
    )
}
