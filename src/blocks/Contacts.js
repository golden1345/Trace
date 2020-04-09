import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import Adress from '../components/Adress';

export default function Contacts() {
    return (
        <Container id="six" className="border-top mt-3 p-5">
            <Row className="d-flex justify-content-center">
                <p className="h6">СВЯЖИТЕСЬ С НАМИ</p>
            </Row>
            <Row className="d-flex justify-content-center">
                <p className="display-4"> <FontAwesomeIcon icon={faMobileAlt}/> +7 (812)321-46-80</p>
            </Row>
            <Adress />
        </Container>
    )
}
