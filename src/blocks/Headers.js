import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Titels from '../components/Titels'
import Requirements from '../components/Requirements'
import ItemsHeader from '../components/ItemsHeader'
import BgVideo from '../components/BgVideo'

export default function Headers() {
    return (
        <Container className="section d-flex flex-column position-relative bg-all p-0 overflow-hidden text-light" fluid>
            <Titels />
            <Row className="mt-auto mb-auto justify-content-center">
                <ItemsHeader />
            </Row>
            <Requirements />
            <BgVideo />
        </Container>
    )
}
