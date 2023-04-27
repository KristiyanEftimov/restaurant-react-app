import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "../css/ContactsImage.module.css";
import "../css/ContactsImage.module.css";
import background from '../media/contacts.png';


export default function ContactsImage() {
    return(
        <Container className={classes.contactsImage}>
            <div className={classes.overlay}></div>
            <img className ={classes.background} src = {background} alt="background" />
            <h2 className={classes.contactUs}>Свържете се с нас</h2>
        </Container>
    );
}