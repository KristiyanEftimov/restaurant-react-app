import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import classes from "../css/ReservationCalendar.module.css";
import { Container } from "react-bootstrap";

export default function ReservationCalendar({ onChange, selectedDate }) {
    return(
        <Container className={classes.calendar}>
            <Calendar minDate={new Date()} onChange={ onChange }/>
        </Container>
    );
}