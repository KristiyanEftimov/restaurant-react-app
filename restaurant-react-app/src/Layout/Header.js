import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Header.module.css";
import logo from './RestaurantLogo.png';


export default function Header() {
  return (
    <Navbar className={classes} bg="light" expand="lg">
      <Container>
        <Navbar.Brand className={classes.brand} href="#home">
          <img src={logo} className={classes.logo} alt="restaurant logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" bg="light">
            <Nav.Link href="#home">Начало</Nav.Link>
            <Nav.Link href="#about">За нас</Nav.Link>
            <NavDropdown title="Меню" id="basic-nav-dropdown">
              <NavDropdown.Item href="#menu-lunch">Обедно меню</NavDropdown.Item>
              <NavDropdown.Item href="#menu-dinner">Основно меню</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Контакти</Nav.Link>
            <Nav.Link href="#reservation">Резервация</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}