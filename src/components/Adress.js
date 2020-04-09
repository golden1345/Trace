import React from 'react'
import { Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function Adress() {
    return (
        <Row>
            <p className="adress d-flex m-auto h6">
                <FontAwesomeIcon icon={faEnvelope} /><a href="mailto:system@infoteh.ru"> system@infoteh.ru</a>
                <FontAwesomeIcon icon={faHome}  className="ml-1"/>Россия, Санкт-Петербург, 16-я линия Васильевского острова, 7
            </p>
        </Row>
    )
}
