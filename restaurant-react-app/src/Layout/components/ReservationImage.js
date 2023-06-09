import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "../css/ContactsImage.module.css";
import "../css/ContactsImage.module.css";
import background from '../media/RestaurantView.jpg';


export default function ContactsImage() {
    return(
        <Container className={classes.contactsImage}>
            <div className={classes.overlay}></div>
            <img className ={classes.background} src = {background} />
            <h2 className={classes.contactUs}>Резервация</h2>
        </Container>
    );
}