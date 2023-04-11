import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import classes from "../css/ContactsInfo.module.css";
import ContactsForm from '../components/ContactsForm';
import "../css/ContactsInfo.module.css";

export default function ContactsInfo() {
    return (
        <Container>
            <Row className={classes.contactsRow}>
                <Col className={classes.contactsCol}>
                    <span className={classes.location}><i class="fa-solid fa-location-dot"></i></span>
                    <p>КЪДЕ СЕ НАМИРАМЕ</p>
                    <p><b>Морска градина Варна</b></p>
                </Col>
                <Col className={classes.contactsCol}>
                    <span className={classes.phone}><i class="fa-solid fa-mobile-screen-button"></i></span>
                    <p>ТЕЛЕФОН</p>
                    <p><b>088 888 8888</b></p>
                </Col>
                <Col className={classes.contactsCol}>
                    <span className={classes.mail}><i class="fa-solid fa-envelope"></i></span>
                    <p>E-MAIL</p>
                    <p><b>thehungrybear@gmail.com</b></p>
                </Col>
                <Col className={classes.contactsCol}>
                    <span className={classes.workingTime}><i class="fa-solid fa-clock"></i></span>
                    <p>РАБОТНО ВРЕМЕ</p>
                    <p><b>Понеделник - Петък <br/>от 8:00 до 00:00</b></p>
                </Col>
            </Row>
            <Row className={classes.secondRow}>
                <Col>
                    <h3>Вижте къде сме на картата:</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2907.8974655930524!2d27.93605231475953!3d43.211639888890126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDEyJzQxLjkiTiAyN8KwNTYnMTcuNyJF!5e0!3m2!1sbg!2sbg!4v1680806841288!5m2!1sbg!2sbg" width="500" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Col>
                <Col>
                    <h3>Свържете се с нас: </h3> <br/>
                    <ContactsForm/>
                </Col>
            </Row>
        </Container>
    );
}