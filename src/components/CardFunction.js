import React from 'react'
import { Card, ListGroup, CardColumns } from 'react-bootstrap'
import imonitor from '../icon/i-monitor.jpg'
import omonitor from '../icon/online-monitor.jpg'
import gmonitor from '../icon/guard-monitor.jpg'
import gpsmonitor from '../icon/gps-monitor.jpg'
import passmonitor from '../icon/pass-monitor.jpg'

export default function CardFunction() {
    return (
        <CardColumns>
            <Card className="text-center">
                <Card.Img src={gpsmonitor} />
                <Card.Body>
                    <Card.Title >
                        МОНИТОРИНГ МАРШРУТОВ ДВИЖЕНИЯ
                    </Card.Title>

                    <ListGroup className="listFunction" variant="flush">
                        <ListGroup.Item>Определение местоположения транспортного средства, построение треков</ListGroup.Item>
                        <ListGroup.Item>Передача навигационной и телеметрической информации в облачный сервис</ListGroup.Item>
                        <ListGroup.Item>Запись информации при потере связи и автоматическая передача при восстановлении</ListGroup.Item>
                    </ListGroup>

                </Card.Body>
            </Card>
            <Card className="text-center">
                <Card.Img src={omonitor} />
                <Card.Body>
                    <Card.Title >
                        ОН-ЛАЙН ВИДЕОМОНИТОРИНГ
                    </Card.Title>

                    <ListGroup className="listFunction" variant="flush">
                        <ListGroup.Item>Видеонаблюдение обстановки внутри и снаружи ТС</ListGroup.Item>
                        <ListGroup.Item>Определение психоэмоционального состояния водителя</ListGroup.Item>
                        <ListGroup.Item>Определение посторонних лиц в кабине</ListGroup.Item>
                        <ListGroup.Item>Распознавание лиц пассажиров</ListGroup.Item>
                        <ListGroup.Item>Распознавание гос. номеров ТС</ListGroup.Item>
                    </ListGroup>

                </Card.Body>
            </Card>
            <Card className="text-center">
                <Card.Img src={gmonitor} />
                <Card.Body>
                    <Card.Title >
                        ПОМОЩЬ ВОДИТЕЛЮ
                    </Card.Title>

                    <ListGroup className="listFunction" variant="flush">
                        <ListGroup.Item>Обнаружение пешеходов в «слепых зонах» </ListGroup.Item>
                        <ListGroup.Item>Обнаружение падений пассажиров</ListGroup.Item>
                        <ListGroup.Item>Обнаружение оставленных предметов</ListGroup.Item>
                        <ListGroup.Item>Обеспечение связи диспетчер-водитель </ListGroup.Item>
                        <ListGroup.Item>Передача сигнала бедствия водителем тревожной кнопкой </ListGroup.Item>
                    </ListGroup>

                </Card.Body>
            </Card>
            <Card className="text-center">
                <Card.Img src={passmonitor} />
                <Card.Body>
                    <Card.Title >
                        КОНТРОЛЬ ПАССАЖИРОПОТОКА
                    </Card.Title>

                    <ListGroup className="listFunction" variant="flush">
                        <ListGroup.Item>Определение количества вошедших/вышедших пассажиров</ListGroup.Item>
                        <ListGroup.Item>Определение текущей наполненности транспортного средства</ListGroup.Item>
                        <ListGroup.Item>Сопоставление данных по оплате проезда с данными подсчет</ListGroup.Item>
                    </ListGroup>

                </Card.Body>
            </Card>
            <Card className="text-center">
                <Card.Img src={imonitor} />
                <Card.Body>
                    <Card.Title >
                        ИНФОРМИРОВАНИЕ ПАССАЖИРОВ
                    </Card.Title>

                    <ListGroup className="listFunction" variant="flush">
                        <ListGroup.Item>Видео/аудио информирование пассажиров в салоне транспортного средства</ListGroup.Item>
                        <ListGroup.Item>Автоматическое объявление остановок и автоматическое управление отображением информации на электронных маршрутоуказателях</ListGroup.Item>
                        <ListGroup.Item>Автоматическое управление отображением информации на бортовом внутрисалонном табло или «бегущая строка»</ListGroup.Item>
                        <ListGroup.Item>Показ рекламы и проведение аудио- и видеоэкскурсий</ListGroup.Item>
                    </ListGroup>

                </Card.Body>
            </Card>
        </CardColumns>
    )
}
