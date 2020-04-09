import React from 'react'
import { Container, Row } from 'react-bootstrap'
import TabsStrcture from '../components/TabsStrcture'

export default function Structure() {
    return (
        <Container className="section" fluid>
        <Row className="text-center">
        <h3 className="h1 m-auto color-main">Состав системы ИНФОТЕХ TRACE</h3>
        </Row>
        <Row>
            <TabsStrcture />
        </Row>
        <Row>
            <p className="lead">Все оборудование и программное обеспечение имеет модульною структуру и позволяет подобрать оптимальный комплект для любого типа транспорта</p>
        </Row>
        </Container>
    )
}
