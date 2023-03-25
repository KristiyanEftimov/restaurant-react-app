import { Navbar, Nav, NavDropdown, Container, NavbarBrand } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Header.module.css";
import logo from './RestaurantLogo.png';


export default function Header() {
  return (
    <Navbar className={classes.navbar}  expand="lg">
      <Container>
        <Navbar.Brand className={classes.brand}>
            <a href="#home"><img src={logo} className={classes.logo} alt="restaurant logo" /></a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={classes.right} id="basic-navbar-nav">
          <Nav className="me-auto" bg="light">
            <Nav.Link className={classes.link} href="#home">Начало</Nav.Link>
            <Nav.Link className={classes.link} href="#about">За нас</Nav.Link>
            <NavDropdown style={{color: "white"}} className={classes.dropdwn} title="Меню" id="basic-nav-dropdown">
              <NavDropdown.Item href="#menu-lunch">Обедно меню</NavDropdown.Item>
              <NavDropdown.Item href="#menu-dinner">Основно меню</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className={classes.link} href="#contact">Контакти</Nav.Link>
            <Nav.Link className={classes.link} href="#reservation">Резервация</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}