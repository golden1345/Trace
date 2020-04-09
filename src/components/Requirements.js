import React from 'react'
import { Row } from 'react-bootstrap'

export default function Requirements() {
    return (
        <Row className="lead h6 position-absolute fixed-bottom flex-column ml-3 d-none d-sm-block">
            <p>Соответствует требованиям</p>
            <ul>
                <li>Постановления Правительства РФ от 26 сентября 2016 г. N 969 </li>
                <li>Приказа Минтранса России от 31.07.2012 №285</li>
                <li>ГОСТ Р 54723-2019, ГОСТ Р 54026-2010, ГОСТ Р 51090-2017, ГОСТ Р 58287-2018</li>
            </ul>
        </Row>
    )
}
