import React from 'react'
import { Container, Row, Nav, Image, Navbar } from 'react-bootstrap'
import vkbrands from '../social/vk-brands.svg'
import yandex from '../social/yandex-brands.svg'
import youtube from '../social/youtube-brands.svg'

export default function Social() {
    return (
        <Row>
            <Navbar collapseOnSelect variant="light" className="m-auto">
                <Container className="justify-content-md-center py-3">
                    <Row>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto text-uppercase font-weight-bold">
                                <Nav.Link href="https://vk.com/npoinfoteh"> <Image src={vkbrands} width="25px" /> ВКОНТАКТЕ</Nav.Link>
                                <Nav.Link href="https://zen.yandex.ru/id/5c41a4368a5d3400ad7b63c4"> <Image src={yandex} width="8px" /> YANDEXDZEN</Nav.Link>
                                <Nav.Link href="https://www.youtube.com/channel/UC3-XEEIBPRR-Ldcam2skuCA"> <Image src={youtube} width="25px" /> YOUTUBE </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Row>
                </Container>
            </Navbar>
        </Row>
    )
}
