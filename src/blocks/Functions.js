import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CardFunction from '../components/CardFunction'

export default function Functions() {
    return (
        <Container className="section" fluid>
        <Row className="text-center">
        <h3 className="h1 m-auto color-main">Функции ИНФОТЕХ TRACE</h3>
        </Row>
        <Row className="mt-3">
        <CardFunction />
        </Row>
        </Container>
    )
}
