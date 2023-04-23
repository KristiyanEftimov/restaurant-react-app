import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "../css/ReservationTime.module.css";

export default function ReservationTime( { onClick } ) {
    return(
        <Container className={classes.reservationTime}>
            <Row className={classes.reservationTimeRow}>
                <Col><button onClick={() => onClick('08:00')} className={classes.reservationTimeCol}>08:00</button></Col>
                <Col><button onClick={() => onClick('08:30')} className={classes.reservationTimeCol}>08:30</button></Col>
                <Col><button onClick={() => onClick('09:00')} className={classes.reservationTimeCol}>09:00</button></Col>
                <Col><button onClick={() => onClick('09:30')} className={classes.reservationTimeCol}>09:30</button></Col>
            </Row>
            <Row className={classes.reservationTimeRow}>
                <Col><button onClick={() => onClick('10:00')} className={classes.reservationTimeCol}>10:00<br/>15% отстъпка</button></Col>
                <Col><button onClick={() => onClick('10:30')} className={classes.reservationTimeCol}>10:30<br/>15% отстъпка</button></Col>
                <Col><button onClick={() => onClick('11:00')} className={classes.reservationTimeCol}>11:00<br/>15% отстъпка</button></Col>
                <Col><button onClick={() => onClick('11:30')} className={classes.reservationTimeCol}>11:30<br/>15% отстъпка</button></Col>
            </Row>
            <Row className={classes.reservationTimeRow}>
                <Col><button onClick={() => onClick('12:00')} className={classes.reservationTimeCol}>12:00<br/>10% отстъпка</button></Col>
                <Col><button onClick={() => onClick('12:30')} className={classes.reservationTimeCol}>12:30<br/>10% отстъпка</button></Col>
                <Col><button onClick={() => onClick('13:00')} className={classes.reservationTimeCol}>13:00<br/>10% отстъпка</button></Col>
                <Col><button onClick={() => onClick('13:30')} className={classes.reservationTimeCol}>13:30<br/>10% отстъпка</button></Col>
            </Row>
            <Row className={classes.reservationTimeRow}>
                <Col><button onClick={() => onClick('14:00')} className={classes.reservationTimeCol}>14:00<br/>15% отстъпка</button></Col>
                <Col><button onClick={() => onClick('14:30')} className={classes.reservationTimeCol}>14:30<br/>15% отстъпка</button></Col>
                <Col><button onClick={() => onClick('15:00')} className={classes.reservationTimeCol}>15:00<br/>15% отстъпка</button></Col>
                <Col><button onClick={() => onClick('15:30')} className={classes.reservationTimeCol}>15:30<br/>15% отстъпка</button></Col>
            </Row>
            <Row className={classes.reservationTimeRow}>
                <Col><button onClick={() => onClick('16:00')} className={classes.reservationTimeCol}>16:00<br/>10% отстъпка</button></Col>
                <Col><button onClick={() => onClick('16:30')} className={classes.reservationTimeCol}>16:30<br/>10% отстъпка</button></Col>
                <Col><button onClick={() => onClick('17:00')} className={classes.reservationTimeCol}>17:00<br/>10% отстъпка</button></Col>
                <Col><button onClick={() => onClick('17:30')} className={classes.reservationTimeCol}>17:30<br/>10% отстъпка</button></Col>
            </Row>
            <Row className={classes.reservationTimeRow}>
                <Col><button onClick={() => onClick('18:00')} className={classes.reservationTimeCol}>18:00</button></Col>
                <Col><button onClick={() => onClick('18:30')} className={classes.reservationTimeCol}>18:30</button></Col>
                <Col><button onClick={() => onClick('19:00')} className={classes.reservationTimeCol}>19:00</button></Col>
                <Col><button onClick={() => onClick('19:30')} className={classes.reservationTimeCol}>19:30</button></Col>
            </Row>
            <Row className={classes.reservationTimeRow}>
                <Col><button onClick={() => onClick('20:00')} className={classes.reservationTimeCol}>20:00</button></Col>
                <Col><button onClick={() => onClick('20:30')} className={classes.reservationTimeCol}>20:30</button></Col>
                <Col><button onClick={() => onClick('21:00')} className={classes.reservationTimeCol}>21:00</button></Col>
                <Col><button onClick={() => onClick('21:30')} className={classes.reservationTimeCol}>21:30</button></Col>
            </Row>
        </Container>
    );
}