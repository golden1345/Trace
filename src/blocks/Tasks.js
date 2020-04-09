import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Tasks() {
    return (
        <Container className="section">
            <Row className="text-center">
                <h3 className="h1 m-auto color-main">Задачи ИНФОТЕХ TRACE</h3>
            </Row>
            <Row className="d-flex justify-content-center mt-3">
                <Col className="text-center">
                    <p className="h4 color-main">Повышение уровня безопасности перевозок</p>
                    <p className="lead">в том числе за счет помощи водителю по обнаружению пешеходов в слепых зонах и контроля его психофизического состояния.</p>
                    <p className="h4 color-main">Улучшение качества информационного обслуживания пассажиров</p>
                    <p className="lead">за счет автоматизации и удаленного управления всеми устройствами информирования.</p>
                    <p className="h4 color-main">Повышение качества управления транспортом</p>
                    <p className="lead">посредством обеспечения всех участников оперативной и достоверной информацией о выполнении транспортной работы и сложившейся транспортной
                        ситуации на дорогах.</p>
                    <p className="h4 color-main">Повышение контроля оплаты проезда</p>
                    <p className="lead">за счет использования объективного мониторинга пассажиропотока.</p>
                </Col>
            </Row>
            <Row>
                <p className="lead text-center">
                <em>Установив необходимый состав комплекса бортового оборудование на транспортные средства, Вы сможете контролировать свой транспорт и решать необходимые задачи 
                    в одной программе.</em>
                </p>
            </Row>
        </Container>
    )
}
