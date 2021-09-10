import { Navbar, Nav, Button, Form, Container } from 'react-bootstrap';

export default function NavBar() {
    return (
        <div className="mb-1">
            <Navbar bg="light" variant="light" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#">Scoot</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#about">Sobre Nosotros</Nav.Link>
                            <Nav.Link href="#services">Servicios</Nav.Link>
                            <Nav.Link href="#location">Localizacion</Nav.Link>
                        </Nav>
                        <Form >
                            <Button className="d-flex mr-auto"  variant="warning">Obten tu scooter ya!</Button>{' '}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}