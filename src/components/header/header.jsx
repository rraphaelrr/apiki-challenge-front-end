import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import Object from '../../constants/Object';
import '../../style/style.scss'

function Header() {
    return (
        
            <section className="headerApiki" id='header'>
                <Container fluid>
                    <header>
                        <Navbar fixed="top" expand="lg" >
                            <Navbar.Brand href={window.location.href + ''}>
                                {Object.logo}
                            </Navbar.Brand>
                        </Navbar>
                    </header>
                </Container>
            </section>
        
    )
}

export default Header;

