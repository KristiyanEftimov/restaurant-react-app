import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import classes from "./RestaurantInfo.module.css";
import RestaurantFood from './RestaurantFood.jpg';

export default function RestaurantInfo() {
    return(
        <Container>
            <Row className={classes.row}>
                <Col>
                    <h3>Нашата мисия</h3>
                    <p className={classes.justify}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br/>
                    <a className={classes.button} href="#">За нас</a>
                </Col>
                <Col><img className={classes.restaurantImage} src={RestaurantFood} alt="Food"/></Col>
            </Row>
            <Row className={classes.row}>
                <Col><img className={classes.restaurantImage} src={RestaurantFood} alt="Food"/></Col>
                <Col>
                    <h3>Различни вкусове всеки ден  </h3>
                    <p className={classes.justify}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br/>
                    <a className={classes.button} href="#">Меню</a>
                </Col>
            </Row>
            <Row className={classes.row}>
                <Col>
                    <h3>Как да ни намерите</h3>
                    <p className={classes.justify}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br/>
                    <a className={classes.button} href="#">Контакти</a>
                </Col>
                <Col><img className={classes.restaurantImage} src={RestaurantFood} alt="Food"/></Col>
            </Row>
            <Row className={classes.row}>
                <Col><p className={classes.reviews}>ОТЗИВИ</p></Col>
            </Row>
            <Row className={classes.opinions}>
                <Col>
                    <h4>“Вкусна храна и прекрасни хора.”</h4>
                    <p>Къщата на Ви излъчва домашния уют, любовта и топлината на близкия приятел, с когото час-два не стигат! Вкусна кухня и прекрасни Хора! Благодаря Ви, за усещанията на радост и щастие, които ме изпълват всеки път, прекрачвайки прага ви!</p>
                    <p>Антоанета Димитрова</p>
                </Col>
                <Col>
                    <h4>“Вкусна храна и прекрасни хора.”</h4>
                    <p>Къщата на Ви излъчва домашния уют, любовта и топлината на близкия приятел, с когото час-два не стигат! Вкусна кухня и прекрасни Хора! Благодаря Ви, за усещанията на радост и щастие, които ме изпълват всеки път, прекрачвайки прага ви!</p>
                    <p>Антоанета Димитрова</p>
                </Col>
                <Col>
                    <h4>“Вкусна храна и прекрасни хора.”</h4>
                    <p>Къщата на Ви излъчва домашния уют, любовта и топлината на близкия приятел, с когото час-два не стигат! Вкусна кухня и прекрасни Хора! Благодаря Ви, за усещанията на радост и щастие, които ме изпълват всеки път, прекрачвайки прага ви!</p>
                    <p>Антоанета Димитрова</p>
                </Col>
            </Row>
        </Container>
    );
}