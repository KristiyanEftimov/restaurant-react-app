import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "../css/ReservationTime.module.css";

export default function ReservationTime( { onClick, selectedTime } ) {
    return(
        <Container className={classes.reservationTime}>
            <Row className={classes.reservationTimeRow}>
                <Col><button onClick={() => onClick('08:00')} className={selectedTime === '08:00' ? classes.selected : ''}>08:00</button></Col>
                <Col><button onClick={() => onClick('08:30')} className={selectedTime === '08:30' ? classes.selected : ''}>08:30</button></Col>
                <Col><button onClick={() => onClick('09:00')} className={selectedTime === '09:00' ? classes.selected : ''}>09:00</button></Col>
                <Col><button onClick={() => onClick('09:30')} className={selectedTime === '09:30' ? classes.selected : ''}>09:30</button></Col>
            </Row>
            <Row className={classes.reservationTimeRow}>
                <Col><button onClick={() => onClick('10:00')} className={selectedTime === '10:00' ? classes.selected : ''}>10:00<br/>15% отстъпка</button></Col>
                <Col><button onClick={() => onClick('10:30')} className={selectedTime === '10:30' ? classes.selected : ''}>10:30<br/>15% отстъпка</button></Col>
                <Col><button onClick={() => onClick('11:00')} className={selectedTime === '11:00' ? classes.selected : ''}>11:00<br/>15% отстъпка</button></Col>
                <Col><button onClick={() => onClick('11:30')} className={selectedTime === '11:30' ? classes.selected : ''}>11:30<br/>15% отстъпка</button></Col>
            </Row>
            <Row className={classes.reservationTimeRow}>
                <Col><button onClick={() => onClick('12:00')} className={selectedTime === '12:00' ? classes.selected : ''}>12:00<br/>10% отстъпка</button></Col>
                <Col><button onClick={() => onClick('12:30')} className={selectedTime === '12:30' ? classes.selected : ''}>12:30<br/>10% отстъпка</button></Col>
                <Col><button onClick={() => onClick('13:00')} className={selectedTime === '13:00' ? classes.selected : ''}>13:00<br/>10% отстъпка</button></Col>
                <Col><button onClick={() => onClick('13:30')} className={selectedTime === '13:30' ? classes.selected : ''}>13:30<br/>10% отстъпка</button></Col>
            </Row>
            <Row className={classes.reservationTimeRow}>
                <Col><button onClick={() => onClick('14:00')} className={selectedTime === '14:00' ? classes.selected : ''}>14:00<br/>15% отстъпка</button></Col>
                <Col><button onClick={() => onClick('14:30')} className={selectedTime === '14:30' ? classes.selected : ''}>14:30<br/>15% отстъпка</button></Col>
                <Col><button onClick={() => onClick('15:00')} className={selectedTime === '15:00' ? classes.selected : ''}>15:00<br/>15% отстъпка</button></Col>
                <Col><button onClick={() => onClick('15:30')} className={selectedTime === '15:30' ? classes.selected : ''}>15:30<br/>15% отстъпка</button></Col>
            </Row>
            <Row className={classes.reservationTimeRow}>
                <Col><button onClick={() => onClick('16:00')} className={selectedTime === '16:00' ? classes.selected : ''}>16:00<br/>10% отстъпка</button></Col>
                <Col><button onClick={() => onClick('16:30')} className={selectedTime === '16:30' ? classes.selected : ''}>16:30<br/>10% отстъпка</button></Col>
                <Col><button onClick={() => onClick('17:00')} className={selectedTime === '17:00' ? classes.selected : ''}>17:00<br/>10% отстъпка</button></Col>
                <Col><button onClick={() => onClick('17:30')} className={selectedTime === '17:30' ? classes.selected : ''}>17:30<br/>10% отстъпка</button></Col>
            </Row>
            <Row className={classes.reservationTimeRow}>
                <Col><button onClick={() => onClick('18:00')} className={selectedTime === '18:00' ? classes.selected : ''}>18:00</button></Col>
                <Col><button onClick={() => onClick('18:30')} className={selectedTime === '18:30' ? classes.selected : ''}>18:30</button></Col>
                <Col><button onClick={() => onClick('19:00')} className={selectedTime === '19:00' ? classes.selected : ''}>19:00</button></Col>
                <Col><button onClick={() => onClick('19:30')} className={selectedTime === '19:30' ? classes.selected : ''}>19:30</button></Col>
            </Row>
            <Row className={classes.reservationTimeRow}>
                <Col><button onClick={() => onClick('20:00')} className={selectedTime === '20:00' ? classes.selected : ''}>20:00</button></Col>
                <Col><button onClick={() => onClick('20:30')} className={selectedTime === '20:30' ? classes.selected : ''}>20:30</button></Col>
                <Col><button onClick={() => onClick('21:00')} className={selectedTime === '21:00' ? classes.selected : ''}>21:00</button></Col>
                <Col><button onClick={() => onClick('21:30')} className={selectedTime === '21:30' ? classes.selected : ''}>21:30</button></Col>
            </Row>
        </Container>
    );
}