import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "../css/ReservationPersonalInfo.module.css"

export default function ReservationPersonalInfo({ personalInfoData, setPersonalInfoData }) {
    return(
        <Container className={classes.personalInfoContainer}>
            <Row className={classes.personalInfoRow}>
                <Col className={classes.col}>
                    <label>Име</label>
                </Col>
                <Col>
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="Въведете име" 
                        required 
                        value={ personalInfoData.firstName } 
                        onChange={ (event) => setPersonalInfoData( {...personalInfoData, firstName: event.target.value} ) }
                    />
                </Col>
            </Row>
            <Row className={classes.personalInfoRow}>
                <Col className={classes.col}>
                    <label>Фамилия</label>
                </Col>
                <Col>
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Въведете фамилия" 
                        required
                        value={ personalInfoData.lastName } 
                        onChange={ (event) => setPersonalInfoData( {...personalInfoData, lastName: event.target.value} ) }
                    />
                </Col>
            </Row>
            <Row className={classes.personalInfoRow}>
                <Col className={classes.col}>
                    <label>E-mail</label>
                </Col>
                <Col>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Въведете e-mail" 
                        required
                        value={ personalInfoData.email } 
                        onChange={ (event) => setPersonalInfoData( {...personalInfoData, email: event.target.value} ) }
                    />
                </Col>
            </Row>
            <Row className={classes.personalInfoRow}>
                <Col className={classes.col}>
                    <label>Телефон</label>
                </Col>
                <Col>
                    <input 
                        type="text" 
                        name="phoneNumber" 
                        placeholder="Въведете телефон" 
                        required
                        value={ personalInfoData.phoneNumber } 
                        onChange={ (event) => setPersonalInfoData( {...personalInfoData, phoneNumber: event.target.value} ) }
                    />
                </Col>
            </Row>
            <Row className={classes.personalInfoRow}>
                <Col className={classes.col}>
                    <label>Коментар</label>
                </Col>
                <Col>
                    <textarea
                        name="comment" 
                        rows="4" cols="23.80"
                        placeholder="Въведете допълнителна информания, ако имате нужда" 
                        value={ personalInfoData.comment } 
                        onChange={ (event) => setPersonalInfoData( {...personalInfoData, comment: event.target.value} ) }
                    />
                </Col>
            </Row>
        </Container>
    );
}