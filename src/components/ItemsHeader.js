import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function ItemsHeader() {
    return (

        <ListGroup className="h4 list-unstyled font-weight-bold text-center" variant="flush">
            <ListGroup.Item>МОНИТОРИНГ МАРШРУТОВ ДВИЖЕНИЯ</ListGroup.Item>
            <ListGroup.Item>ОН-ЛАЙН ВИДЕОМОНИТОРИНГ</ListGroup.Item>
            <ListGroup.Item>ПОМОЩЬ ВОДИТЕЛЮ</ListGroup.Item>
            <ListGroup.Item>КОНТРОЛЬ ПАССАЖИРОПОТОКА</ListGroup.Item>
            <ListGroup.Item>ИНФОРМИРОВАНИЕ ПАССАЖИРОВ</ListGroup.Item>
            <ListGroup.Item>ОПЛАТА ПРОЕЗДА</ListGroup.Item>
        </ListGroup>
    )
}
