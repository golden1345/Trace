import React from 'react'
import { Tabs, Tab, ListGroup } from 'react-bootstrap'

export default function TabsStrcture() {
    return (
        <Tabs defaultActiveKey="center" id="structuretrace" className="text-center">
            <Tab eventKey="center" title="Центральное бортовое оборудование" className="m-auto text-center">
                <ListGroup variant="flush">
                    <ListGroup.Item>Центральный бортовой компьютер</ListGroup.Item>
                    <ListGroup.Item>Бортовой коммутатор</ListGroup.Item>
                    <ListGroup.Item>Дисплей водителя с сенсорным управлением</ListGroup.Item>
                </ListGroup>
            </Tab>
            <Tab eventKey="peripheral" title="Периферийное бортовое оборудование" className="m-auto text-center">
            <ListGroup variant="flush">
                    <ListGroup.Item>Видеокамеры системы видеонаблюдения</ListGroup.Item>
                    <ListGroup.Item>Тепловизоры системы обнаружения пешеходов в слепых зонах</ListGroup.Item>
                    <ListGroup.Item>Внутрисалонные информационные табло</ListGroup.Item>
                    <ListGroup.Item>Электронные маршрутоуказатели</ListGroup.Item>
                    <ListGroup.Item>Внутрисалонные динамики</ListGroup.Item>
                    <ListGroup.Item>Видеокамеры подсчета пассажиропотока</ListGroup.Item>
                    <ListGroup.Item>Тревожная кнопка и голосовая гарнитура для водителя</ListGroup.Item>
                    <ListGroup.Item>Устройства контроля и оплаты проезда</ListGroup.Item>
                    <ListGroup.Item>Универсальная антенна ГЛОНАСС/LTE/WiFi</ListGroup.Item>
                </ListGroup>
            </Tab>
            <Tab eventKey="cloud" title="Облачный сервис управления транспортом" className="m-auto text-center">
            <ListGroup variant="flush">
                    <ListGroup.Item>ГЛОНАСС/GPS мониторинг</ListGroup.Item>
                    <ListGroup.Item>Он-лайн видеомониторинг </ListGroup.Item>
                    <ListGroup.Item>Мониторинг пассажиропотока</ListGroup.Item>
                    <ListGroup.Item>Непрерывная диагностика системы</ListGroup.Item>
                    <ListGroup.Item>Защищенная передача данных и хранение в облаке</ListGroup.Item>
                </ListGroup>
            </Tab>
        </Tabs>
    )
}
