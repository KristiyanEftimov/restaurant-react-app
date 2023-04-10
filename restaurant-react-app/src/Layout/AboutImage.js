import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./css/AboutImage.module.css";
import "./css/AboutImage.module.css";
import background from './media/Hostess.jpeg';


export default function AboutImage() {
    return(
        <Container className={classes.AboutImage}>
            <div className={classes.overlay}></div>
            <img className ={classes.background} src = {background} />
            <h2 className={classes.contactUs}>Нашата Мисия</h2>
        </Container>
    );
}