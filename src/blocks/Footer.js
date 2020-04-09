import React from 'react'
import Adress from '../components/Adress'
import { Container } from 'react-bootstrap'
import Copyright from '../components/Copyright'
import Social from '../components/Social'

export default function Footer() {
    return (
        <Container className="border-top mt-3 p-5">
        <Social/>
            <Adress />
            <Copyright />
        </Container>
    )
}
