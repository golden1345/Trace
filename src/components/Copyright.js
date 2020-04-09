import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

export default class Copyright extends Component {
    render() {
        return (
            <Row>
            <p className="m-auto">
            <FontAwesomeIcon icon={faCopyright} /> ИНФОТЕХ 1998-{(new Date().getFullYear())}
            </p>
            </Row>
        )
    }
}
