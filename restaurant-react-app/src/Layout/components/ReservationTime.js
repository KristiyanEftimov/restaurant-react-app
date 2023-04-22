import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "../css/ReservationTime.module.css";

export default function ReservationTime() {
    const [isActive, setIsActive] = useState(false);
    
    return(
        <Container className={classes.reservationTime}>
            <Row className={classes.reservationTimeRow}>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
            </Row>
            <Row className={classes.reservationTimeRow}>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
            </Row>
            <Row className={classes.reservationTimeRow}>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
            </Row>
            <Row className={classes.reservationTimeRow}>
            <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
            </Row>
            <Row className={classes.reservationTimeRow}>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
            </Row>
            <Row className={classes.reservationTimeRow}>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
            </Row>
            <Row className={classes.reservationTimeRow}>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
                <Col><button className={classes.reservationTimeCol}>08:00<br/>10% отстъпка</button></Col>
            </Row>
        </Container>
    );
}