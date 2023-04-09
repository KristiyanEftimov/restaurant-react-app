import { Navbar, Nav, NavDropdown, Container, NavbarBrand } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./css/Header.module.css";
import logo from './media/RestaurantLogo.png';
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToContacts = () => {
    navigate('/contacts');
  };

  const navigateToAbout = () => {
    navigate('/about');
  };

  const navigateToReservation = () => {
    navigate('/reservation');
  };
  
  return (
    <Navbar className={classes.navbar}  expand="lg">
      <Container>
        <Navbar.Brand className={classes.brand}>
            <a href="/"><img src={logo} className={classes.logo} alt="restaurant logo" /></a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={classes.right} id="basic-navbar-nav">
          <Nav className="me-auto" bg="light">
            <Nav.Link className={classes.link} onClick={navigateToHome}>Начало</Nav.Link>
            <Nav.Link className={classes.link} onClick={navigateToAbout}>За нас</Nav.Link>
            <NavDropdown style={{color: "white"}} href="#menu" title="Меню" id="basic-nav-dropdown">
              <NavDropdown.Item href="#menu-lunch">Обедно меню</NavDropdown.Item>
              <NavDropdown.Item href="#menu-dinner">Основно меню</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className={classes.link} onClick={navigateToContacts}>Контакти</Nav.Link>
            <Nav.Link className={classes.link} onClick={navigateToReservation}>Резервация</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}