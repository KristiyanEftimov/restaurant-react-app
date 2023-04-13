import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "../css/ContactsImage.module.css";
import "../css/ContactsImage.module.css";
import background from '../media/food.jpg';


export default function MenuImage() {
    return(
        <Container className={classes.contactsImage}>
            <div className={classes.overlay}></div>
            <img className ={classes.background} src = {background} />
            <h2 className={classes.contactUs}>Меню</h2>
        </Container>
    );
}